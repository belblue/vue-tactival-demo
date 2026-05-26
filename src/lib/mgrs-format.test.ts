import { describe, it, expect } from "vitest";
import { formatMgrs } from "./mgrs-format";

describe("formatMgrs", () => {
  it("inserts spaces between square, easting, and northing", () => {
    expect(formatMgrs("30TXM1234567890")).toBe("30TXM 12345 67890");
  });
  it("handles 1-digit grid zones", () => {
    expect(formatMgrs("1NXM1234567890")).toBe("1NXM 12345 67890");
  });
  it("leaves malformed strings unchanged (regex no-match)", () => {
    expect(formatMgrs("not-a-coord")).toBe("not-a-coord");
  });
});
