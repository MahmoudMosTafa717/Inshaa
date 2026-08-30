export interface TeamMember {
  id: string;
  name: string;
  role: string;
  syndicateNumber: string;
  experienceYears: number;
  bio: string;
  specialization: string;
  image: string;
}

export const teamData: TeamMember[] = [
  {
    id: "team-1",
    name: "م. عماد الدين أمين",
    role: "مؤسس المكتب والرئيس التنفيذي - مهندس استشاري معتمد",
    syndicateNumber: "سجل استشاري نقابة المهندسين المصرية رقم 1248/خ",
    experienceYears: 22,
    bio: "مهندس استشاري وخبير معتمد في التصميم المعماري والإنشائي وإدارة المشروعات الكبرى بمحافظة الفيوم ومدينة 6 أكتوبر والشيخ زايد والعاصمة الإدارية، قاد تصميم وتنفيذ أكثر من 200 مشروع سكني وتجاري وإداري معتمد بالنقابة وأجهزة المدن.",
    specialization: "التصميم الإنشائي والمعماري المتكامل، استخراج تراخيص البناء، والإشراف الموقعي الصارم",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-2",
    name: "د.م. طارق عبد الرحمن",
    role: "استشاري التصميم الإنشائي وهندسة القيمة ومقاومة الزلازل",
    syndicateNumber: "سجل استشاري نقابة المهندسين المصرية - شعبة مدني",
    experienceYears: 24,
    bio: "دكتوراه في الهندسة الإنشائية بجامعة القاهرة، عضو لجان مراجعة اشتراطات الكود المصري للمنشآت الخرسانية ECP 203، متخصص في المنشآت ذات البحور الواسعة والأبراج.",
    specialization: "التصميم الإنشائي للبحور الواسعة، مقاومة الزلازل، وهندسة القيمة (Value Engineering)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-3",
    name: "م. حسام النجار",
    role: "مدير قطاع التصميم المعماري والتخطيط العمراني",
    syndicateNumber: "عضو نقابة المهندسين المصرية - شعبة عمارة رقم 41205",
    experienceYears: 16,
    bio: "معماري متميز وخبير باشتراطات التراخيص بهيئة المجتمعات العمرانية ومحافظة الفيوم، قاد تصميم العديد من الفيلات والمجمعات السكنية والتجارية العصرية.",
    specialization: "العمارة السكنية الفاخرة، التخطيط العمراني، وتراخيص أجهزة المدن والمحافظات",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "team-4",
    name: "م. نادية الشريف",
    role: "رئيس قسم التصميمات الكهروميكانيكية (MEP) ونظم الـ BIM",
    syndicateNumber: "عضو نقابة المهندسين المصرية - شعبة قوى ميكانيكية رقم 58912",
    experienceYears: 14,
    bio: "خبيرة في تصميم شبكات التكييف المركزي VRF وأنظمة الحماية من الحريق المعتمدة من الدفاع المدني المصري وتطبيق تقنيات BIM المتقدمة.",
    specialization: "أنظمة التكييف المركزي، مكافحة الحريق، ونمذجة معلومات البناء BIM",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  }
];
