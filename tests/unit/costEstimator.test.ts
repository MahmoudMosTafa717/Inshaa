import { describe, it, expect } from "vitest";
import { calculateProjectEstimates } from "@/lib/data/costEstimator";

describe("Cost Estimator Calculation Engine", () => {
  it("should calculate correct design and supervision fee for a luxury villa of 650m²", () => {
    const result = calculateProjectEstimates({
      projectType: "villa",
      builtUpArea: 650,
      scope: "design_and_supervision",
      location: "new_cairo",
      finishLevel: "luxury",
    });

    expect(result.estimatedDesignFee).toBe(650 * 420); // 273,000 EGP
    expect(result.estimatedSupervisionFee).toBe(650 * 280); // 182,000 EGP
    expect(result.estimatedConstructionBudgetMin).toBeGreaterThan(5000000);
    expect(result.estimatedConstructionBudgetMax).toBeGreaterThan(result.estimatedConstructionBudgetMin);
    expect(result.expectedDurationMonths).toBe(12);
  });

  it("should set design fee to 0 when scope is supervision_only", () => {
    const result = calculateProjectEstimates({
      projectType: "commercial",
      builtUpArea: 1200,
      scope: "supervision_only",
      location: "sheikh_zayed",
    });

    expect(result.estimatedDesignFee).toBe(0);
    expect(result.estimatedSupervisionFee).toBe(1200 * 280);
    expect(result.expectedDurationMonths).toBe(12);
  });

  it("should handle large areas (>2000m²) with increased duration", () => {
    const result = calculateProjectEstimates({
      projectType: "residential_building",
      builtUpArea: 2500,
      scope: "full_design",
      location: "new_capital",
    });

    expect(result.estimatedSupervisionFee).toBe(0);
    expect(result.expectedDurationMonths).toBe(18);
  });
});
