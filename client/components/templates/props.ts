export interface NearbyTemplateProps {
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}

export interface CategoryTemplateProps {
  stayType?: string | string[];
  filterCount?: number;
  filters?: any;
}

export interface SignupTemplateProps {}

export interface LoginTemplateProps {}

export interface AuthTemplateProps {}

export interface ForgotPasswordTemplateProps {}

export interface TemplateProps {
  type?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [x: string]: any;
}
