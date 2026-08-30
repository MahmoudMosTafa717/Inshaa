export interface CostEstimatorParams {
  projectType: "villa" | "residential_building" | "commercial" | "interior";
  builtUpArea: number; // in square meters
  scope: "full_design" | "supervision_only" | "design_and_supervision";
  location: "fayoum" | "october" | "sheikh_zayed" | "new_capital" | "new_cairo";
  finishLevel?: "standard" | "luxury" | "ultra_luxury";
}

export interface CostEstimateResult {
  estimatedDesignFee: number;
  estimatedSupervisionFee: number;
  estimatedConstructionBudgetMin: number;
  estimatedConstructionBudgetMax: number;
  expectedDurationMonths: number;
  consultantSyndicateStamp: boolean;
}

export const locationMultipliers: Record<CostEstimatorParams["location"], { label: string; multiplier: number; areaTier: string }> = {
  fayoum: {
    label: "محافظة الفيوم (الفيوم الجديدة / المسلة / دلة / قارون)",
    multiplier: 0.92,
    areaTier: "مقر العمليات والمشروعات الرئيسي",
  },
  october: {
    label: "مدينة 6 أكتوبر وتوسعاتها",
    multiplier: 1.0,
    areaTier: "منطقة استشارية رئيسية بغرب القاهرة",
  },
  sheikh_zayed: {
    label: "مدينة الشيخ زايد وأكتوبر الجديدة",
    multiplier: 1.05,
    areaTier: "منطقة استشارية رئيسية بغرب القاهرة",
  },
  new_capital: {
    label: "العاصمة الإدارية الجديدة",
    multiplier: 1.15,
    areaTier: "أبراج ومنشآت إدارية وتجارية",
  },
  new_cairo: {
    label: "القاهرة الجديدة والتجمع الخامس",
    multiplier: 1.1,
    areaTier: "فيلات ومباني سكنية وتجارية",
  },
};

export const projectTypeRates: Record<CostEstimatorParams["projectType"], {
  label: string;
  baseDesignPerSqm: number;
  baseSupervisionPerSqm: number;
  constructionCostPerSqmMin: number;
  constructionCostPerSqmMax: number;
}> = {
  villa: {
    label: "فيلا سكنية فاخرة",
    baseDesignPerSqm: 420,
    baseSupervisionPerSqm: 280,
    constructionCostPerSqmMin: 9500,
    constructionCostPerSqmMax: 14500,
  },
  residential_building: {
    label: "عمارة / برج سكني",
    baseDesignPerSqm: 280,
    baseSupervisionPerSqm: 190,
    constructionCostPerSqmMin: 7500,
    constructionCostPerSqmMax: 11000,
  },
  commercial: {
    label: "مبنى تجاري / إداري",
    baseDesignPerSqm: 520,
    baseSupervisionPerSqm: 320,
    constructionCostPerSqmMin: 12000,
    constructionCostPerSqmMax: 18000,
  },
  interior: {
    label: "تصميم ديكور وتشطيبات راقية",
    baseDesignPerSqm: 380,
    baseSupervisionPerSqm: 240,
    constructionCostPerSqmMin: 6000,
    constructionCostPerSqmMax: 12500,
  },
};

export function calculateProjectEstimates(params: CostEstimatorParams): CostEstimateResult {
  const rates = projectTypeRates[params.projectType];
  const loc = locationMultipliers[params.location] || locationMultipliers.fayoum;

  let designFee = 0;
  let supervisionFee = 0;

  if (params.scope === "full_design" || params.scope === "design_and_supervision") {
    designFee = Math.round(rates.baseDesignPerSqm * params.builtUpArea * loc.multiplier);
  }

  if (params.scope === "supervision_only" || params.scope === "design_and_supervision") {
    supervisionFee = Math.round(rates.baseSupervisionPerSqm * params.builtUpArea * loc.multiplier);
  }

  const constructionMin = Math.round(rates.constructionCostPerSqmMin * params.builtUpArea);
  const constructionMax = Math.round(rates.constructionCostPerSqmMax * params.builtUpArea);

  let durationMonths = 8;
  if (params.builtUpArea > 800) durationMonths = 12;
  if (params.builtUpArea > 2000) durationMonths = 18;

  return {
    estimatedDesignFee: designFee,
    estimatedSupervisionFee: supervisionFee,
    estimatedConstructionBudgetMin: constructionMin,
    estimatedConstructionBudgetMax: constructionMax,
    expectedDurationMonths: durationMonths,
    consultantSyndicateStamp: true,
  };
}
