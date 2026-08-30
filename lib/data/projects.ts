export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "residential" | "commercial" | "administrative" | "interior";
  categoryAr: string;
  location: string;
  area: number;
  year: string;
  client: string;
  status: "completed" | "under_construction" | "design_phase";
  statusAr: string;
  heroImage: string;
  structuralSystem: string;
  description: string;
  challenge: string;
  solution: string;
  cadSpecs: {
    footprintArea: string;
    totalFloors: string;
    concreteVolume: string;
    steelTonnage: string;
    parkingCapacity: string;
  };
  bimLayers: {
    architectural: string;
    structural: string;
    mep: string;
    render: string;
  };
  gallery: string[];
  features: string[];
}

export const projectsData: Project[] = [
  {
    id: "proj-1",
    slug: "safwa-commercial-residential-tower-fayoum",
    title: "برج الصفوة السكني والتجاري - الفيوم",
    category: "commercial",
    categoryAr: "سكني تجاري متعدد الاستخدامات",
    location: "منطقة المسلة - مدينة الفيوم، محافظة الفيوم",
    area: 4200,
    year: "2025",
    client: "مجموعة الصفوة للتطوير العقاري بالفيوم",
    status: "completed",
    statusAr: "تم التسليم والاعتماد الهندسي الكامل",
    heroImage: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "نظام إطارات خرسانية مع جدران قص (Shear Walls) وأساسات لبشة مسلحة على خوازيق لمقاومة الهبوط والتربة الطينية",
    description: "تصميم وتنفيذ متكامل لأحد أبرز الأبراج السكنية والتجارية بمدينة الفيوم، يدمج بين محلات تجارية ومكاتب إدارية في الطوابق الأولى مع شقق سكنية فاخرة بنظام تشطيب معماري حديث يراعي التهوية الطبيعية والإطلالات المفتوحة.",
    challenge: "طبيعة التربة بوسط مدينة الفيوم والحاجة إلى حماية المباني المجاورة أثناء أعمال الحفر العميق لتنفيذ البدروم المخصص للجراجات.",
    solution: "تم استخدام نظام سند جوانب حفر ستائر خوازيق متقاطعة (Secant Piles) مع نزح جوفي آمن ومعايرة الأحمال بالكامل على برنامج ETABS لضمان أعلى معاملات الأمان.",
    cadSpecs: {
      footprintArea: "600 م² (بدروم جراجات + أرضي وميزانين تجاري + 10 طوابق متكررة)",
      totalFloors: "12 طابقاً",
      concreteVolume: "3100 م³ خرسانة مسلحة C350",
      steelTonnage: "310 طن حديد تسليح عالي المقاومة",
      parkingCapacity: "جراج هيدروليكي يتسع لـ 45 سيارة",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "رخصة بناء معتمدة ومطابقة للكود المصري واشتراطات محافظة الفيوم",
      "توزيع كهروميكانيكي متكامل وشبكة إنذار ومكافحة حريق معتمدة",
      "واجهات ألومنيوم وكلادينج مع زجاج عاكس للحرارة",
      "إشراف موقعي كامل على مراحل الحدادة والنجارة وصب الخرسانة الجاهزة",
    ]
  },
  {
    id: "proj-2",
    slug: "villa-qarun-new-fayoum",
    title: "فيلا قارون المعمارية - الفيوم الجديدة",
    category: "residential",
    categoryAr: "سكني فاخر (فيلات مستقلة)",
    location: "الحي السكني المتميز - مدينة الفيوم الجديدة",
    area: 780,
    year: "2025",
    client: "المهندس أسامة الجارحي",
    status: "completed",
    statusAr: "تم التسليم والإشراف الهندسي الكامل",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "نظام البلاطات اللاكمرية (Flat Slab) مع بحور مفتوحة وأسقف ساقطة ديكورية",
    description: "فيلا سكنية فاخرة تجمع بين الحجر الهاشمي الديكوري والزجاج المودرن، مصممة لاستغلال نسيم الهواء وتوفير مساحات معيشة واسعة مطلة على حمام السباحة والحديقة الخاصة بالفيوم الجديدة.",
    challenge: "تحقيق صالة استقبال واسعة مفتوحة بدون أي أعمدة داخلية مع مراعاة اشتراطات الارتدادات القانونية لجهاز مدينة الفيوم الجديدة.",
    solution: "تصميم كمرات مسبقة الإجهاد مخفية في السقف وزيادة كفاءة قطاعات الأعمدة الطرفية، مما حقق رؤية بصرية متصلة ووفر 18% من تكلفة الخرسانات.",
    cadSpecs: {
      footprintArea: "310 م² (بدروم + أرضي + أول + روف)",
      totalFloors: "4 طوابق",
      concreteVolume: "420 م³ خرسانة مسلحة عيار 350",
      steelTonnage: "42 طن حديد تسليح",
      parkingCapacity: "جراج خاص يتسع لـ 3 سيارات",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "عزل حراري ورطوبي كامل للأسطح وحمامات السباحة",
      "رخصة بناء صادرة من جهاز مدينة الفيوم الجديدة",
      "واجهات حجر هاشمي هيصم طبيعي",
      "إشراف استشاري موقعي على كافة مراحل صب الخرسانة",
    ]
  },
  {
    id: "proj-3",
    slug: "october-hills-luxury-villa-6th-of-october",
    title: "فيلا رابية أكتوبر - 6 أكتوبر",
    category: "residential",
    categoryAr: "سكني فاخر (فيلات)",
    location: "منطقة التوسعات الشرقية - مدينة 6 أكتوبر",
    area: 950,
    year: "2024",
    client: "د. أشرف عبد الفتاح",
    status: "completed",
    statusAr: "تم التسليم الكامل",
    heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "فلات سلاب خرسانة مسلحة مع كمرات طرفية مقواة لمقاومة الرياح والزلازل",
    description: "تصميم وتنفيذ معماري وإنشائي متكامل لفيلا عائلية فاخرة بمدينة 6 أكتوبر، مع تراسات مظللة ودراسة حرارية متقدمة لتوفير استهلاك طاقة التكييف.",
    challenge: "فروق مناسيب الأرض الطبيعية بالموقع في منطقة التوسعات بـ 6 أكتوبر.",
    solution: "استغلال المنسوب المنحدر لتصميم بدروم بمدخل أرضي مباشر للحديقة السفلى وجدار ساند خرساني (Retaining Wall) مدعم.",
    cadSpecs: {
      footprintArea: "380 م² (بدروم حديقة + أرضي + أول + روف)",
      totalFloors: "4 طوابق",
      concreteVolume: "510 م³ خرسانة جاهزة",
      steelTonnage: "52 طن حديد تسليح",
      parkingCapacity: "موقف مغطى لـ 4 سيارات",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "مطابقة تامة لاشتراطات جهاز تنمية مدينة 6 أكتوبر",
      "مقايسة كميات BOQ دقيقة وتوفير 15% من الهدر الخرساني",
      "نظام إضاءة معمارية ليد مدمجة",
    ]
  },
  {
    id: "proj-4",
    slug: "zayed-strip-commercial-plaza",
    title: "مجمع بلازا التجاري والإداري - الشيخ زايد",
    category: "commercial",
    categoryAr: "تجاري وإداري",
    location: "محور البستان - مدينة الشيخ زايد، الجيزة",
    area: 3400,
    year: "2024",
    client: "مجموعة إنماء للاستثمار العقاري",
    status: "completed",
    statusAr: "تم التشغيل والافتتاح التجاري",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "هياكل خرسانية ومعدنية مختلطة لبحور تصل إلى 12 متراً في المعارض والمطاعم",
    description: "مجمع تجاري وإداري بتصميم مفتوح وممرات زوار مدروسة وواجهات زجاجية عصرية تحقق أقصى استفادة تجارية للمستثمرين بالشيخ زايد.",
    challenge: "تنسيق الشبكات الكهروميكانيكية والتكييف المركزي مع معارض بارتفاعات مزدوجة دون أي تعارضات (Clashes).",
    solution: "استخدام نمذجة BIM المتقدمة وتنسيق التخصصات قبل بدء الصب والتنفيذ، مما سرع جدول الأعمال الميداني بنسبة 25%.",
    cadSpecs: {
      footprintArea: "1700 م² (أرضي + أول + روف تجاري)",
      totalFloors: "3 طوابق",
      concreteVolume: "1950 م³",
      steelTonnage: "175 طن",
      parkingCapacity: "75 سيارة مخصصة لرواد المجمع",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "اعتماد الدفاع المدني المصري والحماية من الحريق",
      "رخصة تشغيل معتمدة من جهاز مدينة الشيخ زايد",
      "إشراف كامل واستلام مستخلصات المقاولين",
    ]
  }
];
