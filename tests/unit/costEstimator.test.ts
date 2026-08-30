import { describe, it, expect } from "vitest";
import { calculateProjectEstimates } from "@/lib/data/costEstimator";

describe("Cost Estimator Calculation Engine", () => {
  it("should calculate correct design and supervision fee for a luxury villa in Fayoum of 650m²", () => {
    const result = calculateProjectEstimates({
      projectType: "villa",
      builtUpArea: 650,
      scope: "design_and_supervision",
      location: "fayoum",
      finishLevel: "luxury",
    });

    expect(result.estimatedDesignFee).toBe(251160); // 650 * 420 * 0.92
    expect(result.estimatedSupervisionFee).toBe(167440); // 650 * 280 * 0.92
    expect(result.estimatedConstructionBudgetMin).toBeGreaterThan(4000000);
    expect(result.estimatedConstructionBudgetMax).toBeGreaterThan(result.estimatedConstructionBudgetMin);
    expect(result.expectedDurationMonths).toBe(8);
  });

  it("should calculate correct estimates for an October commercial project", () => {
    const result = calculateProjectEstimates({
      projectType: "commercial",
      builtUpArea: 1200,
      scope: "supervision_only",
      location: "october",
    });

    expect(result.estimatedDesignFee).toBe(0);
    expect(result.estimatedSupervisionFee).toBe(1200 * 320 * 1.0); // 384,000 EGP
    expect(result.expectedDurationMonths).toBe(12);
  });

  it("should handle large areas (>2000m²) with increased duration in Sheikh Zayed", () => {
    const result = calculateProjectEstimates({
      projectType: "residential_building",
      builtUpArea: 2500,
      scope: "full_design",
      location: "sheikh_zayed",
    });

    expect(result.estimatedSupervisionFee).toBe(0);
    expect(result.expectedDurationMonths).toBe(18);
  });
});
