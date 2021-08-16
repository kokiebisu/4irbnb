import { StayRepo } from "../src/repos";

describe("Stay Repo", () => {
  it("Converts data", async () => {
    const repo = await StayRepo.initialize();
    const stay = await repo.getStayById(1);
    console.debug("REPO", stay);
    expect(stay).not.toBeNull();
  });
});
