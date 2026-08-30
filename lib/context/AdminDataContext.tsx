"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { projectsData as defaultProjects, Project } from "@/lib/data/projects";
import { servicesData as defaultServices, Service } from "@/lib/data/services";
import { teamData as defaultTeam, TeamMember } from "@/lib/data/team";
import { testimonialsData as defaultTestimonials, Testimonial } from "@/lib/data/testimonials";
import { 
  projectTypeRates as defaultProjectTypeRates, 
  locationMultipliers as defaultLocationMultipliers,
  CostEstimatorParams,
  CostEstimateResult,
  calculateProjectEstimates as calculateEngine
} from "@/lib/data/costEstimator";
import { siteConfig as defaultSiteConfig } from "@/lib/seo";

const CMS_STORAGE_KEY = "inshaa_cms_data_v2";

export interface SiteIdentity {
  name: string;
  shortName: string;
  englishName: string;
  leadConsultant: string;
  syndicateNumber: string;
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  fayoumAddress: string;
  octoberAddress: string;
  cairoAddress: string;
  workingHours: string;
  tagline: string;
  description: string;
  primaryLocations: string[];
}

export interface ConsultationLead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  projectType: string;
  location: string;
  plotArea?: string;
  notes?: string;
  timestamp: string;
  status: "new" | "contacted" | "meeting_scheduled" | "contracted" | "archived";
  adminNotes?: string;
}

export interface AdminDataState {
  identity: SiteIdentity;
  projects: Project[];
  services: Service[];
  team: TeamMember[];
  testimonials: Testimonial[];
  projectTypeRates: typeof defaultProjectTypeRates;
  locationMultipliers: typeof defaultLocationMultipliers;
  leads: ConsultationLead[];
}

const defaultState: AdminDataState = {
  identity: {
    name: "مكتب إنشاء للهندسة",
    shortName: "إنشاء للهندسة",
    englishName: "Engineering Establishment Office (IE)",
    leadConsultant: "مهندس استشاري / عماد الدين أمين",
    syndicateNumber: "1248/خ - استشارات منشآت خرسانية وتصميم معماري",
    phonePrimary: "0100 123 4567",
    phoneSecondary: "0100 987 6543",
    email: "info@inshaa-engineering.com",
    fayoumAddress: "منطقة المسلة، بالقرب من ديوان عام المحافظة، مدينة الفيوم",
    octoberAddress: "مدينة 6 أكتوبر ومحور البستان بالشيخ زايد، الجيزة",
    cairoAddress: "العاصمة الإدارية الجديدة وشارع التسعين، التجمع الخامس",
    workingHours: "السبت - الخميس: 9:00 ص - 8:00 م",
    tagline: "استشارات هندسية وتصميم معماري يُجسد طموحك بدقة ويحمي سلامة منشأتك",
    description: "بيت خبرة واستشارات هندسية ومعمارية معتمد يقدم خدمات التصميم المعماري والإنشائي، استخراج تراخيص البناء، والإشراف الهندسي الميداني الدقيق على التنفيذ في محافظة الفيوم ومدينة 6 أكتوبر والشيخ زايد والعاصمة الإدارية.",
    primaryLocations: ["محافظة الفيوم", "مدينة 6 أكتوبر", "مدينة الشيخ زايد", "العاصمة الإدارية", "القاهرة الجديدة"],
  },
  projects: defaultProjects,
  services: defaultServices,
  team: defaultTeam,
  testimonials: defaultTestimonials,
  projectTypeRates: defaultProjectTypeRates,
  locationMultipliers: defaultLocationMultipliers,
  leads: [
    {
      id: "lead-init-1",
      name: "الحاج فتحي عبد الوهاب",
      phone: "01001234567",
      projectType: "برج وعمارة سكنية",
      location: "محافظة الفيوم (الفيوم الجديدة / المسلة)",
      plotArea: "850 م²",
      notes: "طلب مراجعة كروكي ترخيص برج سكني تجاري 12 دور",
      timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
      status: "meeting_scheduled",
      adminNotes: "تم تحديد جلسة عمل بالمقر الرئيسي بالمسلة لمراجعة اللوحات.",
    },
    {
      id: "lead-init-2",
      name: "د. إيهاب القاسم",
      phone: "01009876543",
      projectType: "فيلا سكنية",
      location: "مدينة الشيخ زايد",
      plotArea: "650 م²",
      notes: "تصميم فيلا مستقلة مع حمام سباحة ولاندسكيب",
      timestamp: new Date(Date.now() - 3600000 * 18).toISOString(),
      status: "new",
    }
  ],
};

interface AdminContextType {
  state: AdminDataState;
  isHydrated: boolean;
  updateIdentity: (identity: Partial<SiteIdentity>) => void;
  // Projects
  addProject: (project: Project) => void;
  updateProject: (slug: string, project: Partial<Project>) => void;
  deleteProject: (slug: string) => void;
  // Services
  addService: (service: Service) => void;
  updateService: (slug: string, service: Partial<Service>) => void;
  deleteService: (slug: string) => void;
  // Team
  addTeamMember: (member: TeamMember) => void;
  updateTeamMember: (id: string, member: Partial<TeamMember>) => void;
  deleteTeamMember: (id: string) => void;
  // Testimonials
  addTestimonial: (testimonial: Testimonial) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  // Calculator Rates
  updateCalculatorRates: (
    rates: typeof defaultProjectTypeRates,
    multipliers: typeof defaultLocationMultipliers
  ) => void;
  // Leads
  addLead: (lead: Omit<ConsultationLead, "id" | "timestamp" | "status">) => void;
  updateLeadStatus: (id: string, status: ConsultationLead["status"], adminNotes?: string) => void;
  deleteLead: (id: string) => void;
  // Backup & Reset
  exportBackupJson: () => string;
  importBackupJson: (jsonString: string) => boolean;
  resetToDefaults: () => void;
  // Dynamic Calculator Evaluator
  calculateEstimates: (params: CostEstimatorParams) => CostEstimateResult;
}

const AdminDataContext = createContext<AdminContextType | null>(null);

export function AdminDataProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AdminDataState>(defaultState);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(CMS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setState((prev) => ({
          ...defaultState,
          ...parsed,
          identity: { ...defaultState.identity, ...(parsed.identity || {}) },
        }));
      }
    } catch (e) {
      console.warn("Failed to parse stored CMS state, falling back to defaults.", e);
    }
    setIsHydrated(true);
  }, []);

  // Save to LocalStorage whenever state changes
  const saveState = (newState: AdminDataState) => {
    setState(newState);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(newState));
      } catch (e) {
        console.error("Failed to persist CMS state to localStorage", e);
      }
    }
  };

  const updateIdentity = (identityUpdates: Partial<SiteIdentity>) => {
    const updated = {
      ...state,
      identity: { ...state.identity, ...identityUpdates },
    };
    saveState(updated);
  };

  // Projects CRUD
  const addProject = (project: Project) => {
    const updated = {
      ...state,
      projects: [project, ...state.projects],
    };
    saveState(updated);
  };

  const updateProject = (slug: string, projectUpdates: Partial<Project>) => {
    const updated = {
      ...state,
      projects: state.projects.map((p) => (p.slug === slug ? { ...p, ...projectUpdates } : p)),
    };
    saveState(updated);
  };

  const deleteProject = (slug: string) => {
    const updated = {
      ...state,
      projects: state.projects.filter((p) => p.slug !== slug),
    };
    saveState(updated);
  };

  // Services CRUD
  const addService = (service: Service) => {
    const updated = {
      ...state,
      services: [...state.services, service],
    };
    saveState(updated);
  };

  const updateService = (slug: string, serviceUpdates: Partial<Service>) => {
    const updated = {
      ...state,
      services: state.services.map((s) => (s.slug === slug ? { ...s, ...serviceUpdates } : s)),
    };
    saveState(updated);
  };

  const deleteService = (slug: string) => {
    const updated = {
      ...state,
      services: state.services.filter((s) => s.slug !== slug),
    };
    saveState(updated);
  };

  // Team CRUD
  const addTeamMember = (member: TeamMember) => {
    const updated = {
      ...state,
      team: [...state.team, member],
    };
    saveState(updated);
  };

  const updateTeamMember = (id: string, memberUpdates: Partial<TeamMember>) => {
    const updated = {
      ...state,
      team: state.team.map((m) => (m.id === id ? { ...m, ...memberUpdates } : m)),
    };
    saveState(updated);
  };

  const deleteTeamMember = (id: string) => {
    const updated = {
      ...state,
      team: state.team.filter((m) => m.id !== id),
    };
    saveState(updated);
  };

  // Testimonials CRUD
  const addTestimonial = (testimonial: Testimonial) => {
    const updated = {
      ...state,
      testimonials: [testimonial, ...state.testimonials],
    };
    saveState(updated);
  };

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    const updated = {
      ...state,
      testimonials: state.testimonials.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    };
    saveState(updated);
  };

  const deleteTestimonial = (id: string) => {
    const updated = {
      ...state,
      testimonials: state.testimonials.filter((t) => t.id !== id),
    };
    saveState(updated);
  };

  // Calculator Rates
  const updateCalculatorRates = (
    rates: typeof defaultProjectTypeRates,
    multipliers: typeof defaultLocationMultipliers
  ) => {
    const updated = {
      ...state,
      projectTypeRates: rates,
      locationMultipliers: multipliers,
    };
    saveState(updated);
  };

  // Leads
  const addLead = (lead: Omit<ConsultationLead, "id" | "timestamp" | "status">) => {
    const newLead: ConsultationLead = {
      ...lead,
      id: `lead-${Date.now()}`,
      timestamp: new Date().toISOString(),
      status: "new",
    };
    const updated = {
      ...state,
      leads: [newLead, ...state.leads],
    };
    saveState(updated);
  };

  const updateLeadStatus = (id: string, status: ConsultationLead["status"], adminNotes?: string) => {
    const updated = {
      ...state,
      leads: state.leads.map((l) => (l.id === id ? { ...l, status, adminNotes: adminNotes ?? l.adminNotes } : l)),
    };
    saveState(updated);
  };

  const deleteLead = (id: string) => {
    const updated = {
      ...state,
      leads: state.leads.filter((l) => l.id !== id),
    };
    saveState(updated);
  };

  // Backup & Reset
  const exportBackupJson = () => {
    return JSON.stringify(state, null, 2);
  };

  const importBackupJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed && typeof parsed === "object") {
        saveState({
          ...defaultState,
          ...parsed,
        });
        return true;
      }
      return false;
    } catch (e) {
      console.error("Failed to import JSON backup", e);
      return false;
    }
  };

  const resetToDefaults = () => {
    saveState(defaultState);
  };

  // Custom Evaluator using dynamic rates
  const calculateEstimates = (params: CostEstimatorParams): CostEstimateResult => {
    const rates = state.projectTypeRates[params.projectType] || defaultProjectTypeRates[params.projectType];
    const loc = state.locationMultipliers[params.location] || defaultLocationMultipliers[params.location] || { multiplier: 1.0 };

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
  };

  return (
    <AdminDataContext.Provider
      value={{
        state,
        isHydrated,
        updateIdentity,
        addProject,
        updateProject,
        deleteProject,
        addService,
        updateService,
        deleteService,
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        addTestimonial,
        updateTestimonial,
        deleteTestimonial,
        updateCalculatorRates,
        addLead,
        updateLeadStatus,
        deleteLead,
        exportBackupJson,
        importBackupJson,
        resetToDefaults,
        calculateEstimates,
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    // If used outside provider, return default static data gracefully
    return {
      state: defaultState,
      isHydrated: false,
      updateIdentity: () => {},
      addProject: () => {},
      updateProject: () => {},
      deleteProject: () => {},
      addService: () => {},
      updateService: () => {},
      deleteService: () => {},
      addTeamMember: () => {},
      updateTeamMember: () => {},
      deleteTeamMember: () => {},
      addTestimonial: () => {},
      updateTestimonial: () => {},
      deleteTestimonial: () => {},
      updateCalculatorRates: () => {},
      addLead: () => {},
      updateLeadStatus: () => {},
      deleteLead: () => {},
      exportBackupJson: () => JSON.stringify(defaultState, null, 2),
      importBackupJson: () => false,
      resetToDefaults: () => {},
      calculateEstimates: calculateEngine,
    };
  }
  return context;
}
