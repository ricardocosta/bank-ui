import { getIdentity } from "../identity";

describe("API: getIdentity", () => {
  it("returns the identity information", async () => {
    const result = await getIdentity();

    expect(result).toEqual({
      id: "852c8f3a-51a3-4daa-b082-10af3bd4439e",
      name: "John Smith",
      firstName: "John",
      lastName: "Smith",
    });
  });
});
