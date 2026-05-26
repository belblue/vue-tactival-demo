import { describe, it, expect, beforeEach } from "vitest";
import { useStandard } from "./useStandard";

describe("useStandard", () => {
  beforeEach(() => {
    const { setStandard } = useStandard();
    setStandard("APP6");
  });
  it("defaults to APP6", () => {
    const { currentStandard } = useStandard();
    expect(currentStandard.value).toBe("APP6");
  });
  it("setStandard updates the ref", () => {
    const { currentStandard, setStandard } = useStandard();
    setStandard("2525C");
    expect(currentStandard.value).toBe("2525C");
  });
  it("all consumers see the same value (module-level singleton)", () => {
    const a = useStandard();
    const b = useStandard();
    a.setStandard("2525C");
    expect(b.currentStandard.value).toBe("2525C");
  });
});
