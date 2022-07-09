import { multiply } from "@/playground.js";

describe("basic math", () => {
  it("adds two number", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtracts two number", () => {
    expect(1 - 1).toBe(0);
  });

  it("multiplies two numbers", () => {
    expect(multiply(1, 2)).toBe(2);
  });
});
