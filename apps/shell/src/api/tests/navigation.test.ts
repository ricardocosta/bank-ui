import { getNavigation } from "../navigation";

describe("API: getNavigation", () => {
  it("returns the information for app menu", async () => {
    const result = await getNavigation();

    expect(result).toEqual([
      {
        id: "1",
        path: "dashboard",
        name: "Dashboard",
        content: "../pages/Dashboard",
        default: true,
      },
      { id: "2", path: "transactions", name: "Transactions", content: "../pages/Transactions" },
    ]);
  });
});
