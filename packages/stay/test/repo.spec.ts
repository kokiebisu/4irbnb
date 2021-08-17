import { StayMapper } from "../src/mapper";
import { StayRepo } from "../src/repos";

describe("Stay Repo", () => {
  it("Converts data", async () => {
    const repo = await StayRepo.initialize();
    const stay = await repo.getStayById(1);
    const domain = StayMapper.convertToDomain(stay);
    console.debug("REPO", domain);
    expect(stay).not.toBeNull();
  });
});
