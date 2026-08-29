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
    slug: "villa-al-narges-new-cairo",
    title: "فيلا النرجس المعمارية الحديثة",
    category: "residential",
    categoryAr: "سكني فاخر (فيلات)",
    location: "التجمع الخامس - حي النرجس، القاهرة الجديدة",
    area: 920,
    year: "2025",
    client: "عائلة المهندس كريم الألفي",
    status: "completed",
    statusAr: "تم التسليم والإشراف الهندسي الكامل",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "نظام البلاطات اللاكمرية (Flat Slab) مع بحور واسعة 8.5 متر ومقاومة عالية للأحمال الجانبية",
    description: "تصميم وتنفيذ متكامل لفيلا سكنية عصرية بتصميم مينيماليست حديث يدمج بين الخصوصية الشرقية والانفتاح الزجاجي على الحديقة الخاصة وحمام السباحة، مع مطابقة تامة لاشتراطات جهاز القاهرة الجديدة والارتدادات القانونية.",
    challenge: "تطلب التصميم المعماري صالة استقبال رئيسية بارتفاع مزدوج (Double Height) دون أي أعمدة وسطية تعيق الرؤية، مع الالتزام بنسبة البناء القانونية 40% من مساحة الأرض واشتراطات الردود.",
    solution: "تم استخدام نظام إنشائي متطور بخرسانة مسبقة الإجهاد (Post-Tensioned Beams) كمرابط مخفية لنقل الأحمال للأعمدة الطرفية بكفاءة عالية وتوفير 15% من كميات حديد التسليح التقليدي.",
    cadSpecs: {
      footprintArea: "368 م² (بدروم + أرضي + أول + روف)",
      totalFloors: "4 طوابق",
      concreteVolume: "480 م³ خرسانة مسلحة عيار 350",
      steelTonnage: "48 طن حديد تسليح عالي المقاومة",
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
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "عزل حراري ورطوبي كامل بنظام البولي يوريثان",
      "توزيع كهروميكانيكي ذكي للتكييف المركزي VRF",
      "واجهات حجر هاشمي مودرن مع زجاج دبل سيكوريت عازل للصوت",
      "استخراج رخصة البناء وموافقة المجمعة العشرية خلال 25 يوماً عمل",
    ]
  },
  {
    id: "proj-2",
    slug: "aurora-business-hub-new-capital",
    title: "مجمع أورورا للأعمال والإدارة",
    category: "administrative",
    categoryAr: "إداري وتجاري",
    location: "حي المال والأعمال - العاصمة الإدارية الجديدة",
    area: 4800,
    year: "2024",
    client: "شركة كابيتال للاستثمار والتطوير العقاري",
    status: "completed",
    statusAr: "تم التسليم وافتتاح المقرات الإدارية",
    heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "نظام إطارات خرسانية مع جدران قص (Shear Walls) وكور مصاعد مركزي لمقاومة الزلازل والرياح طبقاً للكود المصري 201",
    description: "مبنى إداري ذكي من الفئة الأولى (Grade-A Office Building) مصمم لتقديم مساحات مكتبية مرنة ومفتوحة، حاصل على تصنيف الكفاءة البيئية، مع واجهات زجاجية مزدوجة موفرة للطاقة بنسبة 32%.",
    challenge: "تربة موقع العاصمة الإدارية تتطلب أساسات عميقة ذات حساسية للمياه الجوفية مع حاجة لـ 2 طابق بدروم كامل لمواقف السيارات.",
    solution: "تم تنفيذ لبشة خرسانية مسلحة بسمك 1.6 متر مع خوازيق ساندة (Piles) متقاطعة بنظام Secant Piles لمنع تسرب المياه مع عزل مائي إيبوكسي معتمد.",
    cadSpecs: {
      footprintArea: "1200 م² لكل دور (2 بدروم + أرضي + 7 طوابق)",
      totalFloors: "10 طوابق",
      concreteVolume: "3600 م³ خرسانة جاهزة C400",
      steelTonnage: "390 طن حديد حديد تسليح B500D-WR",
      parkingCapacity: "110 سيارة بالبدروم المزدوج",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1541888946425-d0fbb186156a?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "نظام إدارة مباني ذكي متكامل (BMS)",
      "مطابقة متطلبات الدفاع المدني المصري والحماية من الحريق",
      "شبكات ألياف ضوئية وبنية تحتية كهروميكانيكية متقدمة",
      "إشراف هندسي ومراقبة جودة الخرسانات عبر مكعبات اختبار معملية",
    ]
  },
  {
    id: "proj-3",
    slug: "zayed-strip-commercial-plaza",
    title: "بلازا ستريب مول الشيخ زايد",
    category: "commercial",
    categoryAr: "تجاري وترفيهي",
    location: "محور البستان - مدينة الشيخ زايد، الجيزة",
    area: 3400,
    year: "2024",
    client: "مجموعة إنماء للاستثمار التجاري",
    status: "completed",
    statusAr: "تم التسليم والتشغيل التجاري",
    heroImage: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "هياكل معدنية وخرسانية مختلطة (Composite Structure) لبحور تصل إلى 12 متراً في المعارض التجارية",
    description: "تصميم تجاري عصري بممرات مشاة خارجية مفتوحة ومناطق جلوس ومطاعم تلبي أعلى معايير تدفق الزوار (Footfall Flow) مع سهولة الوصول ومواقف سيارات سطحية ومغطاة.",
    challenge: "الحاجة إلى تسليم رخص البناء والتشغيل التجاري في فترة زمنية قياسية قبل موسم الافتتاح السنوي.",
    solution: "تم تسريع وتيرة العمل عبر النمذجة ثلاثية الأبعاد BIM وتنسيق التخصصات إلكترونياً (Clash Detection) مما قلل زمن التنفيذ بالموقع بنسبة 28%.",
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
      render: "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "تنسيق موقع ولاندسكيب مع نوافير مائية راقصة",
      "مطابقة كاملة لاشتراطات جهاز مدينة الشيخ زايد",
      "تصميم شبكات تصريف مياه الأمطار وغرف الكهرباء المعتمدة من شركة الكهرباء",
    ]
  },
  {
    id: "proj-4",
    slug: "penthouse-interior-katameya-dunes",
    title: "تصميم وتنفيذ بنتهاوس قطامية ديونز",
    category: "interior",
    categoryAr: "تصميم داخلي وتشطيبات راقية",
    location: "كمبوند قطامية ديونز - القاهرة الجديدة",
    area: 550,
    year: "2025",
    client: "د. طارق السعدني",
    status: "completed",
    statusAr: "تم التسليم بالمفتاح (Turnkey Fitout)",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    structuralSystem: "إعادة توزيع الفراغات الداخلية وهياكل خفيفة مع عزل صوتي متقدم بين الغرف",
    description: "تصميم داخلي فاخر بطراز نيو كلاسيك مودرن مع توظيف الرخام الإيطالي المستورد وخشب الجوز الطبيعي، وتوزيع إضاءة معمارية مخفية تحقق أعلى درجات الراحة النفسية.",
    challenge: "تعديل مسارات التكييف المركزي والمطابخ دون التأثير على الارتفاع الصافي للسقف أو اختراق الكمرات الخرسانية القائمة.",
    solution: "عمل مسح ليزري ثلاثي الأبعاد ثلاثي الأبعاد 3D Laser Scanning لتوثيق الوضع القائم وإعادة تصميم شبكة الـ MEP بدقة المليمتر.",
    cadSpecs: {
      footprintArea: "550 م² (دور كامل مع تراس مكشوف 120 م²)",
      totalFloors: "طابق علوي مع روف",
      concreteVolume: "تعديلات معمارية خفيفة بدون أحمال إضافية",
      steelTonnage: "هياكل تيوبات حديد خفيفة للبرجولات والروف",
      parkingCapacity: "2 باكية جراج مخصصة",
    },
    bimLayers: {
      architectural: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
      structural: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
      mep: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
      render: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    ],
    features: [
      "نظام سمارت هوم متكامل للتحكم بالإضاءة والستائر والتكييف",
      "أرضيات رخام كرارة إيطالي معالج ضد الانزلاق",
      "تراس خارجي بإطلالة بانورامية مع حمام سباحة جاكوزي معلق",
    ]
  }
];
