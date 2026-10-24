export type ProjectStatus = "Completed" | "Ongoing" | "Planned";

export interface Project {
  id: string;
  title: string;
  category: string;
  location?: string;
  description: string;
  image: string;
  status?: ProjectStatus;
  year?: string;
  area?: string;
  value?: string;
  client?: string;
  highlights?: string[];
  folderName?: string;
  gallery?: string[];
  colSpan?: string;
  aspectRatio?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  type: "Construction Work" | "Professional Capability";
  shortDescription: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  project?: string;
  rating?: number;
  videoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image?: string;
  bio?: string;
  credentials?: string;
  experience?: string;
  linkedin?: string;
}

export interface FloatingCardData {
  id: string;
  title: string;
  value: string;
  subtitle: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "bottom-center";
}

export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface ContactFormData {
  name: string;
  email?: string;
  phone: string;
  subject: string;
  projectType: string;
  message: string;
}
