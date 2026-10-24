export interface ServiceCategory {
  id: string;
  title: string;
  type: "Construction Work" | "Professional Capability";
  shortDescription: string;
  iconName: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: "residential-construction",
    title: "Residential Building Work",
    type: "Construction Work",
    shortDescription:
      "Comprehensive residential building construction executed with rigorous quality control, structural durability, and disciplined timeline governance.",
    iconName: "Home",
  },
  {
    id: "commercial-construction",
    title: "Commercial Building Work",
    type: "Construction Work",
    shortDescription:
      "Specialized commercial building development engineered for modern business facilities, commercial spaces, and structural reliability.",
    iconName: "Building2",
  },
  {
    id: "pmc",
    title: "Project Management Consultancy (PMC)",
    type: "Professional Capability",
    shortDescription:
      "Professional project management consultancy offering end-to-end site supervision, vendor coordination, cost monitoring, and schedule adherence.",
    iconName: "Layers",
  },
  {
    id: "epc",
    title: "Engineering, Procurement & Construction (EPC)",
    type: "Professional Capability",
    shortDescription:
      "Integrated EPC solutions uniting structural engineering planning, materials procurement, and robust construction execution.",
    iconName: "HardHat",
  },
  {
    id: "project-delivery",
    title: "Comprehensive Project Delivery",
    type: "Professional Capability",
    shortDescription:
      "Disciplined lifecycle delivery focused on creating measurable asset value, milestone completion, and handover compliance.",
    iconName: "ShieldCheck",
  },
];
