/**
 * TypeScript Type Definitions & Data Contracts
 * SON AGNI SECURITIES PRIVATE LIMITED
 */

export interface RegisteredAddress {
  line1: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  full: string;
}

export interface PhoneNumbers {
  primary: string;
  secondary: string;
  primaryTel: string;
  secondaryTel: string;
}

export interface WhatsAppConfig {
  number: string;
  defaultMessage: string;
  url: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  benefits: string[];
  idealIndustries: string[];
  responsibilities: string[];
  category?: string;
}

export interface FAQItem {
  q: string;
  a: string;
  category?: string;
}

export interface CompanyConfig {
  brandName: string;
  legalName: string;
  legalNameUpper: string;
  tagline: string;
  logo: string;
  companyType: string;
  businessCategory: string;
  primaryLocation: string;
  locationBadge: string;
  enquiryScope: string;
  registeredAddress: RegisteredAddress;
  phoneNumbers: PhoneNumbers;
  email: string;
  emailMailto: string;
  whatsapp: WhatsAppConfig;
  services: ServiceItem[];
  faqs: FAQItem[];
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  comment: string;
  company: string;
  isDemo?: boolean;
}

export interface TestimonialItem {
  id: string;
  client_name: string;
  company_name?: string;
  designation?: string;
  message: string;
  rating: number;
  image_url?: string;
  testimonial_date?: string;
  is_verified: boolean;
  is_published: boolean;
  display_order: number;
  created_at?: string;
  updated_at?: string;
}

export interface ContactFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  subject: string;
  message: string;
}

export interface QuoteFormData {
  serviceRequired: string;
  location: string;
  guardsCount: number;
  shiftType: string;
  duration: string;
  specialRequirements: string;
  name: string;
  mobile: string;
  email: string;
  companyName: string;
}
