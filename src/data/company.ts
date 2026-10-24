export interface CompanyInfo {
  legalName: string;
  brandName: string;
  establishedYear: number;
  visionStatement: string;
  industry: string;
  gstin: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    pincode: string;
    state: string;
    country: string;
    fullAddress: string;
    lines?: string[];
  };
  contactNumbers: Array<{
    display: string;
    raw: string;
    telLink: string;
    whatsappLink: string;
  }>;
  googleMapsUrl: string;
  socialLinks: {
    youtube: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  statistics: Array<{
    id: string;
    label: string;
    value: string;
    description: string;
  }>;
}

export const companyData: CompanyInfo = {
  legalName: "DANAM HOLDINGS",
  brandName: "DANAM HOLDINGS",
  establishedYear: 2014,
  visionStatement: "A VISION TO CREATE VALUE, A COMMITMENT TO TRANSFORM ASSETS",
  industry:
    "Construction, Project Management Consultancy (PMC), Engineering, Procurement and Construction (EPC), and Project Delivery",
  gstin: "33AAZFD2298N1ZK",
  address: {
    line1: "1, Anuppanadi Road",
    line2: "Teppakulam",
    city: "Madurai",
    pincode: "625009",
    state: "Tamil Nadu",
    country: "India",
    lines: [
      "1, Anuppanadi Road, Teppakulam,",
      "Madurai – 625009,",
      "Tamil Nadu, India.",
    ],
    fullAddress: "1, Anuppanadi Road, Teppakulam, Madurai – 625009, Tamil Nadu, India.",
  },
  contactNumbers: [
    {
      display: "+91 81100 06913",
      raw: "8110006913",
      telLink: "tel:+918110006913",
      whatsappLink: "https://wa.me/918110006913",
    },
    {
      display: "+91 95663 20944",
      raw: "9566320944",
      telLink: "tel:+919566320944",
      whatsappLink: "https://wa.me/919566320944",
    },
  ],
  googleMapsUrl:
    "https://www.google.com/maps/dir//DANAM+HOLDINGS,+1,+Anuppanadi+Rd,+AA+Road,+Teppakulam,+Madurai,+Meenakshi+Nagar,+Tamil+Nadu+625009/@9.9033205,78.1450301,2929m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3b00c5502b89f263:0x9fc3dca9d9220d0c!2m2!1d78.1466128!2d9.9090466?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D",
  socialLinks: {
    youtube: "http://www.youtube.com/@danamholdings",
    instagram: "https://www.instagram.com/danamholdings/",
    facebook: "https://www.facebook.com/p/Danamholdingsofficial-61561735904375/",
    linkedin: "https://www.linkedin.com/in/n-e-praveen-pgp-acm-0289218a",
  },
  statistics: [
    {
      id: "stat-exp",
      label: "Experience",
      value: "9+ Years",
      description: "Dedicated professional leadership",
    },
    {
      id: "stat-direct",
      label: "Direct Client Projects",
      value: "₹46+ Cr",
      description: "Delivered direct client capital valuation",
    },
    {
      id: "stat-corporate",
      label: "Corporate Projects",
      value: "12+",
      description: "Corporate projects executed via EPC/PMC",
    },
    {
      id: "stat-team",
      label: "Team Capacity",
      value: "50+",
      description: "Execution capacity & specialist network",
    },
    {
      id: "stat-consultant",
      label: "Projects as Consultant",
      value: "112+",
      description: "Strategic advisory and consultancy missions",
    },
  ],
};
