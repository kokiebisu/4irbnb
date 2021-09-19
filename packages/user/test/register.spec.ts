import { MockRepository } from "./mock";
import { RegisterUseCase } from "../src/usecases";
import { Service } from "../src/services";
import { RegisterCommand } from "../src/commands";

describe("Register", () => {
  it("is successful with no '@' mark in email", async () => {
    let exceptionThrown = false;
    const repository = new MockRepository();
    const service = new Service(repository);
    const register = new RegisterUseCase(repository, service);

    const registerData = {
      firstName: "Ben",
      lastName: "Parker",
      email: "withNoAtMark",
    };
    const command = new RegisterCommand(
      registerData.firstName,
      registerData.lastName,
      registerData.email
    );

    try {
      await register.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    const user = await repository.findByEmail(registerData.email);
    expect(user).toBeNull();
    expect(exceptionThrown).toBeTruthy();
  });

  it("is successful with all valid inputs", async () => {
    let exceptionThrown = false;

    const repository = new MockRepository();
    const service = new Service(repository);
    const register = new RegisterUseCase(repository, service);

    const registerData = {
      firstName: "Ben",
      lastName: "Parker",
      email: "ben_parker@gmail.com",
    };
    const command = new RegisterCommand(
      registerData.firstName,
      registerData.lastName,
      registerData.email
    );

    try {
      await register.execute(command);
    } catch (err) {
      exceptionThrown = true;
    }

    const user = await repository.findByEmail(registerData.email);
    expect(user).not.toBeNull();
    expect(exceptionThrown).toBeFalsy();
  });
});
