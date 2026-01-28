
export interface PricingPlan {
  id: string;
  badge: string;
  title: string;
  price: string;
  originalPrice: string;
  benefits: string[];
  buttonText: string;
  buttonUrl: string;
  accentColor: string;
  variant?: 'minimal' | 'classic';
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
