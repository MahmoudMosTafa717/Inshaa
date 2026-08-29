export type ProjectType = "villa" | "residential_building" | "commercial" | "interior";
export type ScopeType = "full_design" | "design_and_supervision" | "supervision_only" | "turnkey_fitout";
export type LocationZone = "new_cairo" | "sheikh_zayed" | "new_capital" | "october" | "other";

export interface CostCalculationInput {
  projectType: ProjectType;
  builtUpArea: number; // in m²
  scope: ScopeType;
  location: LocationZone;
  finishLevel?: "semi_finished" | "luxury" | "ultra_luxury";
}

export interface CostCalculationResult {
  estimatedDesignFee: number;
  estimatedSupervisionFee: number;
  estimatedConstructionBudgetMin: number;
  estimatedConstructionBudgetMax: number;
  expectedDurationMonths: number;
  breakdown: {
    architecturalPercent: number;
    structuralPercent: number;
    mepPercent: number;
    permittingPercent: number;
  };
}

export function calculateProjectEstimates(input: CostCalculationInput): CostCalculationResult {
  const { projectType, builtUpArea, scope, finishLevel = "luxury" } = input;

  // Base construction cost per m² in Egyptian market (EGP 2025/2026 estimates)
  let baseConstructionPerM2 = 8500; // skeleton (خرسانات ومباني)
  if (projectType === "villa") {
    baseConstructionPerM2 = 9500;
  } else if (projectType === "commercial") {
    baseConstructionPerM2 = 12000;
  } else if (projectType === "residential_building") {
    baseConstructionPerM2 = 8000;
  } else if (projectType === "interior") {
    baseConstructionPerM2 = 0; // only fitout
  }

  // Finishing additions per m²
  let finishAddonPerM2 = 0;
  if (finishLevel === "semi_finished") {
    finishAddonPerM2 = 2500;
  } else if (finishLevel === "luxury") {
    finishAddonPerM2 = 7500;
  } else if (finishLevel === "ultra_luxury") {
    finishAddonPerM2 = 14000;
  }

  const totalCostPerM2Min = baseConstructionPerM2 + (finishAddonPerM2 * 0.9);
  const totalCostPerM2Max = (baseConstructionPerM2 * 1.15) + (finishAddonPerM2 * 1.1);

  const estimatedConstructionBudgetMin = Math.round(builtUpArea * totalCostPerM2Min);
  const estimatedConstructionBudgetMax = Math.round(builtUpArea * totalCostPerM2Max);

  // Engineering Design Fee per m² (Egyptian engineering syndicate consulting rates)
  let designFeePerM2 = 350; // Architectural + Structural + MEP + BOQ
  if (projectType === "villa") designFeePerM2 = 420;
  if (projectType === "commercial") designFeePerM2 = 550;
  if (projectType === "interior") designFeePerM2 = 600;

  const estimatedDesignFee = Math.round(builtUpArea * designFeePerM2);

  // Site supervision fee (monthly / percentage based - approx 3-4% of construction skeleton or 250 EGP/m²)
  const estimatedSupervisionFee = Math.round(builtUpArea * 280);

  // Duration in months
  let expectedDurationMonths = 12;
  if (builtUpArea < 500) expectedDurationMonths = 8;
  else if (builtUpArea > 2000) expectedDurationMonths = 18;

  return {
    estimatedDesignFee: scope === "supervision_only" ? 0 : estimatedDesignFee,
    estimatedSupervisionFee: (scope === "full_design" ? 0 : estimatedSupervisionFee),
    estimatedConstructionBudgetMin,
    estimatedConstructionBudgetMax,
    expectedDurationMonths,
    breakdown: {
      architecturalPercent: 40,
      structuralPercent: 30,
      mepPercent: 20,
      permittingPercent: 10,
    }
  };
}
