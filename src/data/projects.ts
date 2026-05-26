export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  playStoreLink?: string;
  appStoreLink?: string;
  webLink?: string;
}

export const projects: Project[] = [
  {
    id: 8,
    title: "Spreadly",
    description:
      "Munich digital business card SaaS. Shipped the AI scanner (still the headline 630% follow-ups stat), Apple + Google Wallet integration, and i18n foundation as Lead Mobile.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826409/portfolio_projects/spreadly_v1_nanobanana.jpg",
    tags: ["Flutter", "AI/ML", "Wallet"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=app.spreadly.app",
    appStoreLink:
      "https://apps.apple.com/us/app/spreadly-digital-business-card/id6448201235",
    webLink:
      "https://spreadly.app",
  },
  {
    id: 3,
    title: "Paloma POS",
    description:
      "AI-first cloud POS for restaurants. Designed the offline-first architecture, real-time sync engine, and intelligent order management system.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779776122/portfolio_projects/paloma_pos_v1_nanobanana.jpg",
    tags: ["Flutter", "Cloud", "AI"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.palomapos.pos&hl=en",
    appStoreLink:
      "https://apps.apple.com/dk/app/palomapos/id6474072326",
    webLink:
      "https://palomapos.com",
  },
  {
    id: 10,
    title: "Duffle",
    description:
      "Crypto-to-everyday payments platform. Architected wallet infrastructure, borderless transfers, and the web + mobile client from the ground up.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1751137250/portfolio_projects/gdwojl0tfb7ury2bztjl.png",
    tags: ["React", "Node.js", "Fintech"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=io.ivorychain.duffle",
    appStoreLink:
      "https://apps.apple.com/us/app/duffle/id6739775801?platform=ipad",
    webLink:
      "https://www.getduffle.io/",
  },
  {
    id: 1,
    title: "Kusnap",
    description:
      "AI-powered marketplace connecting buyers and sellers. Built the full stack, recommendation engine, real-time chat, payment integration, and cross-platform mobile apps.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1750703175/portfolio_projects/17_v6r4n7.png",
    tags: ["Flutter", "Node.js", "AI/ML"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.kusnap.kusnapapp&hl=en",
    appStoreLink:
      "https://apps.apple.com/ng/app/kusnap/id1670357672",
    webLink:
      "https://kusnap.com",
  },
  {
    id: 11,
    title: "Roppi",
    description:
      "Nigerian Q-commerce flagship. Groceries, food, alcohol, pharmacy, electronics with in-app wallet, real-time tracking, and reservations. Core contributor to the 4-app Roppi ecosystem in Flutter.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826412/portfolio_projects/roppi_superapp_v1_nanobanana.jpg",
    tags: ["Flutter", "Marketplace", "Payments"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.roppi.superapp",
    webLink:
      "https://roppi.co",
  },
  {
    id: 7,
    title: "Jutigo",
    description:
      "Invoice management SaaS. Built the full product, document generation, custom branding engine, client delivery system, and web dashboard.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1750703174/portfolio_projects/16_w5bpji.png",
    tags: ["Flutter", "React", "SaaS"],
    appStoreLink:
      "https://apps.apple.com/us/app/jutigo/id6547832962",
    webLink:
      "https://usejutigo.com",
  },
  {
    id: 12,
    title: "Roppi Business",
    description:
      "Merchant POS for Roppi vendors. Inventory, restock-cycle math, revenue tracking, and customer analytics.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826414/portfolio_projects/roppi_merchant_v1_nanobanana.jpg",
    tags: ["Flutter", "B2B", "SaaS"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.roppi.merchant",
  },
  {
    id: 13,
    title: "Roppi Driver",
    description:
      "Gig courier app for Roppi deliveries. Bike and car modes, earnings estimator, on-demand cashout. Live in Lagos and Ibadan.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826417/portfolio_projects/roppi_driver_v1_nanobanana.jpg",
    tags: ["Flutter", "Logistics", "Gig"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.roppi.roppi_driver",
  },
  {
    id: 14,
    title: "Ro Manager",
    description:
      "Internal zone manager app for Roppi fulfillment supervisors. Area operations and dispatch oversight.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826420/portfolio_projects/roppi_manager_v1_nanobanana.jpg",
    tags: ["Flutter", "Operations"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.roppi.agent",
  },
  {
    id: 6,
    title: "Triberly",
    description:
      "Social platform for diaspora communities. Engineered real-time messaging, community matching algorithms, and the full mobile experience.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1750703175/portfolio_projects/18_fx1z8z.png",
    tags: ["Flutter", "Firebase", "Social"],
    appStoreLink:
      "https://apps.apple.com/in/app/triberly/id6469516292",
  },
  {
    id: 15,
    title: "Faramove",
    description:
      "Nigerian last-mile and express logistics. Three-sided marketplace covering users, riders, and hubs.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826422/portfolio_projects/faramove_v1_nanobanana.jpg",
    tags: ["Flutter", "Logistics", "Marketplace"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.faramove.user",
    webLink:
      "https://faramove.com",
  },
  {
    id: 2,
    title: "Edoko",
    description:
      "Cross-border e-commerce platform bridging foreign stores and African consumers. Built payment processing, logistics tracking, and the mobile experience.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1669269235/portfolio_projects/Frame_33_g7wi32.png",
    tags: ["Flutter", "REST API", "Payments"],
    appStoreLink:
      "https://apps.apple.com/ca/app/edoko/id1600923527",
  },
  {
    id: 16,
    title: "TACBay",
    description:
      "TVET marketplace for Nigerian technicians, artisans, and vocational learners. Multi-platform iOS app.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1779826425/portfolio_projects/tacbay_v1_nanobanana.jpg",
    tags: ["Flutter", "Marketplace", "Education"],
    appStoreLink:
      "https://apps.apple.com/in/app/tacbay/id6479637108",
  },
  {
    id: 9,
    title: "Mimecon",
    description:
      "AI emoticon creator that turns photos into animated characters. Engineered the generation pipeline, social feed, and real-time sharing across platforms.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/v1750703175/portfolio_projects/15_ucadqq.png",
    tags: ["Flutter", "AI/ML", "Firebase"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ploonet.mimecon&hl=en",
    appStoreLink:
      "https://apps.apple.com/kr/app/id6504627348",
  },
  {
    id: 4,
    title: "Titan Xchange",
    description:
      "Borderless payment platform. Engineered real-time exchange rates, multi-currency wallet system, and KYC integration across web and mobile.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/w_350,h_200,c_fill,f_auto,g_auto/v1669061368/portfolio_projects/Frame_41_zlz3cn.png",
    tags: ["Flutter", "React", "Fintech"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.titanx_change.www",
    appStoreLink:
      "https://apps.apple.com/us/app/titanxchange/id6444230222",
    webLink:
      "https://titan-website.vercel.app/",
  },
  {
    id: 5,
    title: "4traderx",
    description:
      "Currency exchange platform for African payments. Built the trading engine, rate calculation system, and cross-platform mobile clients.",
    image:
      "https://res.cloudinary.com/dxfwzjz4k/image/upload/w_350,h_200,c_fill,f_auto,g_auto/v1669269273/portfolio_projects/Frame_42_1_dnyh8n.png",
    tags: ["Flutter", "Fintech", "API"],
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.fourtraderx.app",
    appStoreLink:
      "https://apps.apple.com/us/app/4traderx/id1605193631",
  },
];

export const testimonials = [
  {
    quote:
      "Transformed our workflow management app. Deep expertise across the full stack — delivered fast, reliable, and user-friendly results.",
    name: "Sarah Chen",
    role: "Operations Director",
    company: "LogiFlow",
  },
  {
    quote:
      "Built our e-commerce platform from the ground up — backend, frontend, everything. Exceeded our expectations and boosted online sales by 40%.",
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "Artisan Marketplace",
  },
  {
    quote:
      "The custom desktop application streamlined our entire inventory process. Impressive technical depth and attention to detail.",
    name: "Jennifer Park",
    role: "Supply Chain Manager",
    company: "TechComponents",
  },
  {
    quote:
      "From architecture to deployment, delivered our mobile app on time and within budget. Excellent communication throughout.",
    name: "David Thompson",
    role: "CEO",
    company: "FitTrack Solutions",
  },
];

export const skills = [
  { name: "Flutter", category: "mobile" },
  { name: "Dart", category: "mobile" },
  { name: "Kotlin", category: "mobile" },
  { name: "Swift", category: "mobile" },
  { name: "React", category: "web" },
  { name: "TypeScript", category: "web" },
  { name: "Next.js", category: "web" },
  { name: "Node.js", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "Supabase", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "CI/CD", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Tailwind CSS", category: "web" },
];
