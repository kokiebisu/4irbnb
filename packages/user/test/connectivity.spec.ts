import { Identifier } from "@4irbnb/common";
import { Email } from "../src/domains/fields";
import { Repository } from "../src/repos";

describe("Connectivity", () => {
  it("Finds by ID", async () => {
    const repo = await Repository.initialize();
    const user = await repo.findById(new Identifier("1"));
    expect(user).not.toBeNull();
  });
  it("Finds by Email", async () => {
    const repo = await Repository.initialize();
    const user = await repo.findByEmail(Email.create("kenichikona@gmail.com"));
    expect(user).not.toBeNull();
  });
});
