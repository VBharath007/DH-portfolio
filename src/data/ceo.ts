export interface CeoDetails {
  name: string;
  designation: string;
  professionalProfile: string[];
  totalExperience: string;
  education: Array<{
    degree: string;
    field?: string;
    institutionUrl?: string;
  }>;
  linkedin: string;
  image: string;
  visionStatement: string;
  companyVision: string;
  companyMission: string;
  quote: string;
  quoteAuthor: string;
  bioSummary: string;
  shortBioBullets: string[];
  achievements: Array<{
    title: string;
    desc: string;
    tag: string;
  }>;
  floatingCards: Array<{
    id: string;
    title: string;
    value: string;
    subtitle: string;
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "bottom-center";
  }>;
}

export const ceoProfileData: CeoDetails = {
  name: "N.E.Praveen Elangovan",
  designation: "Managing Director",
  professionalProfile: [
    "Visionary Leader",
    "8+ Years of Professional Leadership Experience",
    "Expert in PMC, EPC & Project Delivery",
    "Committed to Creating Value & Transforming Assets",
  ],
  shortBioBullets: [
    "Visionary Leader",
    "8+ Years of Professional Leadership Experience",
    "Expert in PMC, EPC & Project Delivery",
    "Committed to Creating Value & Transforming Assets",
  ],
  totalExperience: "9+ Years",
  education: [
    {
      degree: "Master's Degree, Advanced Construction Management",
      field: "Advanced Construction & Infrastructure Management",
    },
    {
      degree: "Master of Business Administration (MBA), Project Management",
      field: "Strategic Project Governance & Execution",
      institutionUrl: "https://www.linkedin.com/school/15105486/",
    },
  ],
  achievements: [
    {
      title: "₹46+ Cr Direct Client Projects Delivered",
      desc: "Delivered direct client capital milestones across bespoke residences and commercial facilities.",
      tag: "Capital Valuation",
    },
    {
      title: "12+ Corporate Projects Delivered via EPC / PMC",
      desc: "Comprehensive engineering oversight, procurement precision, and disciplined project governance.",
      tag: "Corporate EPC/PMC",
    },
    {
      title: "112+ Infrastructure & Building Projects as Consultant",
      desc: "End-to-end technical auditing, advisory oversight, and milestone quality governance.",
      tag: "Strategic Consultancy",
    },
    {
      title: "Turnkey Construction & Asset Value Transformation",
      desc: "Integrated delivery model bridging architectural intent, engineering execution, and long-term asset value.",
      tag: "Delivery Excellence",
    },
  ],
  linkedin: "https://www.linkedin.com/in/n-e-praveen-pgp-acm-0289218a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B4HDttvEdT7%2BMttCemSUILQ%3D%3D",
  image: "/images/ceo/ceo-executive-portrait.jpg",
  visionStatement: "A VISION TO CREATE VALUE, A COMMITMENT TO TRANSFORM ASSETS",
  companyVision: "To create lasting value and transform physical assets through professional engineering and delivery excellence.",
  companyMission: "Delivering turnkey construction, Project Management Consultancy (PMC), and EPC solutions with uncompromising quality and accountability.",
  quote: "A VISION TO CREATE VALUE, A COMMITMENT TO TRANSFORM ASSETS",
  quoteAuthor: "N.E.Praveen Elangovan — Managing Director",
  bioSummary:
    "N.E.Praveen Elangovan is the Managing Director of DANAM HOLDINGS. A visionary leader with over 9+ years of dedicated professional experience, he specializes in Project Management Consultancy (PMC), EPC execution, and comprehensive Project Delivery across residential and commercial sectors.",
  floatingCards: [
    {
      id: "exp",
      title: "Total Experience",
      value: "9+ Years",
      subtitle: "Professional leadership in PMC & EPC",
      position: "top-left",
    },
    {
      id: "direct-projects",
      title: "Direct Client Projects",
      value: "₹46+ Cr",
      subtitle: "Capital valuation delivered",
      position: "top-right",
    },
    {
      id: "corporate-projects",
      title: "Corporate EPC/PMC",
      value: "12+ Projects",
      subtitle: "Corporate projects delivered",
      position: "bottom-left",
    },
    {
      id: "team-capacity",
      title: "Team Capacity",
      value: "50+",
      subtitle: "Execution capacity & specialist network",
      position: "bottom-right",
    },
    {
      id: "consultant-projects",
      title: "Consultancy Missions",
      value: "112+ Projects",
      subtitle: "Projects delivered as consultant",
      position: "bottom-center",
    },
  ],
};
