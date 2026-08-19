import type { Faculty } from "@/data/site";
import type { Language } from "@/lib/i18n";

type FacultyText = { name: string; description: string };
type PostText = { title: string; excerpt: string; content?: string[] };
type TestimonialText = { quote: string; program: string };
type FaqText = { question: string; answer: string };
type StaffText = { role: string; qualification: string; bio: string };

const facultyAr: Record<string, FacultyText> = {
  "faculty-journalism-media": {
    name: "الصحافة والإعلام",
    description: "التحرير الصحفي، الإذاعة، الإعلام الرقمي والاتصالات عبر الصحافة والراديو والشاشة.",
  },
  "faculty-business-administration": {
    name: "إدارة الأعمال",
    description: "الإدارة، التمويل، التسويق، ريادة الأعمال ومسارات التعليم التنفيذي.",
  },
  "faculty-information-systems": {
    name: "نظم المعلومات",
    description:
      "برمجة وبرمجيات تُدرَّس في معامل حاسوب مجهزة بالكامل، تؤهل الخريجين للعمل في تصميم المواقع والتطبيقات أو كمسؤولي تقنية معلومات في كبرى المؤسسات المصرية.",
  },
  "faculty-nursing": {
    name: "التمريض",
    description: "الممارسة السريرية، رعاية المرضى، الصحة المجتمعية والتدريب داخل المستشفيات.",
  },
  "faculty-languages-translation": {
    name: "اللغات والترجمة",
    description: "العربية والإنجليزية والفرنسية والترجمة المتخصصة للسياقات الأكاديمية والتجارية.",
  },
  "faculty-surveying-mapping": {
    name: "المساحة ورسم الخرائط",
    description:
      "مساحة عامة للأراضي الزراعية وتخطيط الطرق والتطوير العقاري، بتدريب مكثف على أيدي مهندسين من كبرى شركات المقاولات في مصر.",
  },
  "faculty-petroleum-technology": {
    name: "تكنولوجيا البترول",
    description: "عمليات الاستكشاف، الحفر، هندسة المكامن والشهادات في قطاع الطاقة.",
  },
  "faculty-medical-analysis": {
    name: "التحاليل الطبية",
    description: "علوم المختبرات الإكلينيكية، التشخيص، أمراض الدم والممارسة المخبرية الطبية.",
  },
  "faculty-tourism-hotels": {
    name: "السياحة والفنادق",
    description: "عمليات الضيافة، إدارة السفر، الأغذية والمشروبات وإدارة الفنادق.",
  },
};

const postAr: Record<string, PostText> = {
  "choosing-the-right-diploma": {
    title: "كيف تختار الدبلوم المهني المناسب في 2026",
    excerpt:
      "خمسة أسئلة تفصل بين الشهادة التي تُغيّر مسيرتك المهنية وتلك التي تكتفي بتزيين سيرتك الذاتية.",
  },
  "inside-the-ai-lab": {
    title: "جولة داخل مختبر الذكاء الاصطناعي التطبيقي الجديد بأكاديمية MIA",
    excerpt:
      "جولة على محطات العمل، مجموعات البيانات والشراكات الصناعية التي تدعم دفعات علوم البيانات لدينا.",
  },
  "skills-employers-want": {
    title: "المهارات التي يبحث عنها أصحاب العمل بالفعل في المنطقة",
    excerpt: "حللنا 1,200 إعلان وظيفي في القاهرة ودول الخليج. إليك ما تغيّر هذا العام.",
  },
  "balancing-work-and-study": {
    title: "الموازنة بين وظيفة بدوام كامل والدراسة المسائية",
    excerpt: "عادات من خريجين أنهوا دبلومًا دون التوقف عن مسيرتهم المهنية.",
  },
  "portfolio-that-converts": {
    title: "بناء ملف أعمال يحوّل المقابلات إلى عروض عمل",
    excerpt: "ما الذي يبحث عنه مديرو التوظيف في أول تسعين ثانية من مراجعة ملف الأعمال.",
  },
  "graduation-ceremonies": {
    title: "حفلات التخرج والتكريمات",
    excerpt:
      "منذ تأسيس الأكاديمية وتحرص الإدارة على تنظيم حفلات التخرج والتكريمات لأوائل الطلاب، حيث يشعر الطالب المتفوق في هذه اللحظة بالتقدير المعنوي.",
    content: [
      "منذ تأسيس الأكاديمية وتحرص الإدارة على تنظيم حفلات التخرج والتكريمات لأوائل الطلاب، حيث يشعر الطالب المتفوق في هذه اللحظة بالتقدير المعنوي.",
      "كما أن الأكاديمية تكرّم أولياء أمور الطلاب المتفوقين، والذين كان لهم الدور الأساسي في تفوق أبنائهم الطلاب.",
      "كذلك تقوم الأكاديمية عادة في حفلات التخرج بتسليم الطلاب الأوائل الجوائز المادية والعينية، حيث إنه منذ عام 2018 وتسلّم الأكاديمية لخريجيها الأوائل أجهزة لاب توب مكافأة على تفوقهم أثناء الدراسة.",
      "كذلك تساعد الأكاديمية خريجيها المتفوقين على التعيين عن طريق إرسال أوراقهم لكبرى المؤسسات المتخصصة في كل قسم، حتى يتسنى لهم التعيين بشكل مباشر في هذه المؤسسات.",
      "كما تقوم الأكاديمية في هذه الحفلات بتكريم السادة أعضاء هيئة التدريس، وذلك على مجهوداتهم خلال العام الدراسي مع الطلاب.",
      "كما أن الأكاديمية تتشرف في هذه الحفلات بحضور وتكريم لفيف من الشخصيات العامة في المجتمع المصري في مختلف المجالات والتخصصات.",
    ],
  },
};

const categoryAr: Record<string, string> = {
  "Career Advice": "نصائح مهنية",
  "Campus News": "أخبار الحرم الجامعي",
  "Industry Insights": "رؤى الصناعة",
  "Student Life": "حياة الطلاب",
  Admissions: "القبول",
  "Tuition & Fees": "الرسوم الدراسية",
  Academics: "الشؤون الأكاديمية",
  "Campus Life": "الحياة الجامعية",
  "Online Learning": "التعلم عبر الإنترنت",
  Leadership: "القيادة",
  Professors: "أعضاء هيئة التدريس",
  "Industry Mentors": "مرشدون من قطاع الصناعة",
  "Guest Lecturers": "محاضرون ضيوف",
};

const partnerAr: Record<string, string> = {
  "Cairo Governorate Graduate Employment Authority": "جهاز تشغيل الخريجين - محافظة القاهرة",
  "Ministry of Industry and Trade": "وزارة الصناعة والتجارة",
  "Professional Academy for Teachers – Ministry of Education":
    "الأكاديمية المهنية للمعلمين - وزارة التربية والتعليم",
  "National Council for Education and Training – Cabinet of Ministers":
    "المجلس الوطني للتعليم والتدريب - مجلس الوزراء",
  "Leading Egyptian public universities": "كبرى الجامعات المصرية الحكومية",
};

const testimonialAr: Record<string, TestimonialText> = {
  "Salma Ibrahim": {
    quote:
      "وضعني مشروع التخرج أمام طلب حقيقي من عميل. بعد أسبوعين من التخرج، عرضت عليّ نفس الشركة وظيفة.",
    program: "تحليل البيانات التطبيقي والذكاء الاصطناعي",
  },
  "Mahmoud Hassan": {
    quote:
      "درست في المساء أثناء عملي بدوام كامل. كان النظام صعبًا لكنه لم يكن مستحيلًا أبدًا، والإرشاد ساعدني على الاستمرار.",
    program: "دبلوم إدارة الأعمال",
  },
  "Farida Kamel": {
    quote:
      "ما فاجأني هو ثقافة التغذية الراجعة. كل تسليم كان يعود إليّ بملاحظات عملية وقابلة للتطبيق.",
    program: "التسويق الرقمي المتكامل",
  },
  "Omar El-Sayed": {
    quote:
      "المدرّبون ما زالوا يعملون في المجال، لذا كانت كل دراسة حالة مأخوذة من مشروع حقيقي. لم يكن شيء نظريًا.",
    program: "معسكر تطوير البرمجيات",
  },
  "Yasmin Adel": {
    quote: "التحقت للحصول على شهادة وخرجت بشبكة علاقات. أصبحت الدفعة نفسها دائرتي المهنية.",
    program: "إدارة المشاريع الاحترافية",
  },
  "Karim Mostafa": {
    quote:
      "أعادت خدمات التوظيف صياغة سيرتي الذاتية ثلاث مرات حتى نجحت. حصلت على مقابلتين خلال شهر من التخرج.",
    program: "الأمن السيبراني وعمليات السحابة",
  },
};

const faqAr: Record<string, FaqText> = {
  "What are the general entry requirements?": {
    question: "ما هي شروط القبول العامة؟",
    answer:
      "تتطلب معظم البرامج المهنية شهادة الثانوية العامة بالإضافة إلى مقابلة تحفيزية قصيرة. تتطلب المسارات فوق الجامعية درجة بكالوريوس معتمدة، وفي بعض البرامج، سنتين من الخبرة ذات الصلة.",
  },
  "Can I apply if my degree is from outside Egypt?": {
    question: "هل يمكنني التقديم إذا كانت شهادتي من خارج مصر؟",
    answer:
      "نعم. أرسل كشوف درجاتك مع ترجمة رسمية. يُنهي فريق القبول مراجعة المعادلة خلال خمسة أيام عمل.",
  },
  "When do applications close?": {
    question: "متى يُغلق باب التقديم؟",
    answer:
      "يُغلق باب التقديم قبل أسبوعين من كل موعد قبول، أو قبل ذلك إذا اكتملت الدفعة. يحصل المتقدمون مبكرًا على أولوية في المنح الدراسية.",
  },
  "Do you offer instalment plans?": {
    question: "هل تقدمون خطط تقسيط؟",
    answer:
      "يقدم كل برنامج خطة تقسيط بدون فوائد تُحتسب لكل وحدة دراسية. يُطبَّق خصم 5% عند سداد الرسوم كاملة مقدمًا.",
  },
  "How do scholarships work?": {
    question: "كيف تعمل المنح الدراسية؟",
    answer:
      "تمنح MIA منحًا دراسية على أساس التفوق أو الحاجة تصل إلى 40%. أرسل نموذج المنحة مع طلبك والمستندات الداعمة.",
  },
  "How large are the cohorts?": {
    question: "ما حجم الدفعات الدراسية؟",
    answer: "تقتصر الدفعات على 24 متعلمًا حتى يتمكن المدرّبون من مراجعة العمل الفردي كل أسبوع.",
  },
  "Are the certificates internationally recognised?": {
    question: "هل الشهادات معترف بها دوليًا؟",
    answer:
      "تصدر شهادات MIA من خلال شركائنا المعتمدين، وتؤهلك عدة مسارات مباشرة للامتحانات المهنية أو امتحانات الموردين العالميين.",
  },
  "Is there parking and study space on campus?": {
    question: "هل يوجد مواقف سيارات ومساحات للمذاكرة في الحرم الجامعي؟",
    answer:
      "يوفر حرم المعادي موقف سيارات آمن، وصالة مذاكرة تعمل على مدار الساعة، ومكتبة ومقهى للطلاب.",
  },
  "Do you host networking events?": {
    question: "هل تنظمون فعاليات للتواصل المهني؟",
    answer:
      "ننظم لقاءات شهرية مع أصحاب العمل، وجلسات مع الخريجين، ومعرض مشاريع تخرج سنوي مفتوح للشركاء من قطاع الصناعة.",
  },
  "Are online sessions live or recorded?": {
    question: "هل الجلسات عبر الإنترنت مباشرة أم مسجلة؟",
    answer: "الجلسات مباشرة مع مدرّب، وتُسجَّل كل جلسة وتكون متاحة في بوابة التعلم لمدة 12 شهرًا.",
  },
  "What technology do I need?": {
    question: "ما التقنية التي أحتاجها؟",
    answer:
      "يكفي جهاز لابتوب مع اتصال إنترنت مستقر. تُوفَّر البرامج المتخصصة عبر معمل MIA السحابي دون تكلفة إضافية.",
  },
};

const staffAr: Record<string, StaffText> = {
  "Dr. Amr Shaker": {
    role: "رئيس الأكاديمية",
    qualification: "دكتوراه في إدارة التعليم",
    bio: "يقود الاستراتيجية الأكاديمية وملف الاعتماد لجميع كليات الأكاديمية.",
  },
  "Dr. Yasmine El-Sharkawy": {
    role: "رئيس قسم إدارة الأعمال والقيادة",
    qualification: "دكتوراه في الإدارة، INSEAD",
    bio: "تقود برامج التعليم التنفيذي وشراكات التعلم المؤسسي.",
  },
  "Eng. Karim Fahmy": {
    role: "المدرّب الرئيسي، البيانات والذكاء الاصطناعي",
    qualification: "ماجستير علوم الحاسب",
    bio: "يبني منهج التعلم الآلي التطبيقي والبنية التحتية للمعامل في MIA.",
  },
  "Nour Abdelrahman": {
    role: "مرشدة التسويق النمو",
    qualification: "ماجستير إدارة أعمال - تسويق",
    bio: "تُدخل ميزانيات حملات حقيقية وملخصات وكالات إلى الفصل الدراسي.",
  },
  "Eng. Hisham Nabil": {
    role: "عضو هيئة تدريس أول، إدارة تنفيذ المشاريع",
    qualification: "PMP · PMI-ACP",
    bio: "يدرّب قادة التنفيذ في قطاعات البنية التحتية والطاقة والتكنولوجيا.",
  },
  "Sarah Milton": {
    role: "رئيسة دراسات اللغات",
    qualification: "ماجستير اللغويات التطبيقية",
    bio: "تصمم إطار الكفاءة اللغوية ومعايير تقييم اللغة في الأكاديمية.",
  },
  "Mona Adel": {
    role: "رئيسة قسم الأفراد والتنظيم",
    qualification: "SHRM-SCP",
    bio: "تربط نظرية الموارد البشرية بواقع أسواق العمل الإقليمية.",
  },
  "Tarek Halim": {
    role: "محاضر ضيف، التكنولوجيا المالية",
    qualification: "CFA · ماجستير تمويل",
    bio: "يقدم دورات موسمية متخصصة في المدفوعات والإقراض والتنظيم.",
  },
  "Dina Roshdy": {
    role: "مديرة خدمات التوظيف",
    qualification: "ماجستير تطوير المسار المهني",
    bio: "تشرف على الإرشاد المهني وعلاقات أصحاب العمل وتوظيف الخريجين.",
  },
  "Omar Ghaly": {
    role: "مرشد هندسة الحوسبة السحابية",
    qualification: "AWS Solutions Architect Pro",
    bio: "يرشد فرق مشاريع التخرج في عمليات النشر السحابي بمستوى إنتاجي.",
  },
  "Laila Mansour": {
    role: "محاضرة ضيفة، التفكير التصميمي",
    qualification: "ماجستير تصميم الخدمات",
    bio: "تدير ورش ابتكار بالتعاون مع مؤسسات شريكة.",
  },
  "Ahmed Sobhy": {
    role: "مدير الجودة والاعتماد",
    qualification: "ماجستير أنظمة الجودة",
    bio: "يحافظ على الاعتماد الدولي للأكاديمية وجاهزيتها للمراجعة.",
  },
};

export function localizeFaculty<T extends Pick<Faculty, "slug" | "name" | "description">>(
  faculty: T,
  language: Language,
): T {
  if (language !== "ar") return faculty;
  const text = facultyAr[faculty.slug];
  if (!text) return faculty;
  return { ...faculty, name: text.name, description: text.description };
}

export function localizePost<
  T extends { slug: string; title: string; excerpt: string; content?: string[] },
>(post: T, language: Language): T {
  if (language !== "ar") return post;
  const text = postAr[post.slug];
  if (!text) return post;
  return {
    ...post,
    title: text.title,
    excerpt: text.excerpt,
    content: text.content ?? post.content,
  };
}

export function localizeCategory(category: string, language: Language): string {
  if (language !== "ar") return category;
  return categoryAr[category] ?? category;
}

export function localizePartner(partner: string, language: Language): string {
  if (language !== "ar") return partner;
  return partnerAr[partner] ?? partner;
}

export function localizeTestimonial<T extends { name: string; quote: string; program: string }>(
  testimonial: T,
  language: Language,
): T {
  if (language !== "ar") return testimonial;
  const text = testimonialAr[testimonial.name];
  if (!text) return testimonial;
  return { ...testimonial, quote: text.quote, program: text.program };
}

export function localizeFaq<T extends { question: string; answer: string }>(
  faq: T,
  language: Language,
): T {
  if (language !== "ar") return faq;
  const text = faqAr[faq.question];
  if (!text) return faq;
  return { ...faq, question: text.question, answer: text.answer };
}

export function localizeStaff<
  T extends { name: string; role: string; qualification: string; bio: string },
>(person: T, language: Language): T {
  if (language !== "ar") return person;
  const text = staffAr[person.name];
  if (!text) return person;
  return { ...person, role: text.role, qualification: text.qualification, bio: text.bio };
}
