import { Identifier } from "@4irbnb/common";
import { Email } from "../src/domains/fields";
import { Repository } from "../src/repos";
import { Factory } from "../src/factory";
import { Entity, Fields } from "../src/domains";

describe("Connectivity", () => {
  it("Finds by ID", async () => {
    const repo = await Repository.initialize();
    const result = await repo.findById(new Identifier("1"));
    expect(result).not.toBeNull();
  });
  it("Finds by Email", async () => {
    const repo = await Repository.initialize();
    const result = await repo.findByEmail(
      Email.create("kenichikona@gmail.com")
    );
    expect(result).not.toBeNull();
    expect(result.id.toString()).toEqual(1);
    expect(result.fullName.getValue().firstName).toEqual("Kenichi");
    expect(result.fullName.getValue().lastName).toEqual("Okiebisu");
  });
  it("Save", async () => {
    const repo = await Repository.initialize();
    const factory = new Factory(repo);
    const data = {
      email: Fields.Email.create("random@gmail.com"),
      fullName: Fields.FullName.create("Ben", "Parker"),
    };
    const user = await factory.create(data);
    const result = await repo.save(user);
    expect(result.email.getValue()).toEqual(data.email.getValue());
    expect(result.fullName.getValue()).toEqual(data.fullName.getValue());
  });
  it.only("Delete", async () => {
    const repo = await Repository.initialize();
    const data = new Entity(new Identifier("13"), {
      email: Fields.Email.create("random@gmail.com"),
      fullName: Fields.FullName.create("Ben", "Parker"),
    });
    const result = await repo.delete(data);
    expect(result.email.getValue()).toEqual(data.email.getValue());
    expect(result.fullName.getValue()).toEqual(data.fullName.getValue());
  });
});
