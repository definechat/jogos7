
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
  trackingId: string; // ID para o content_name do Facebook Pixel
  buttonId: string;   // ID HTML solicitado (ex: btn_10)
  variant?: 'minimal' | 'classic';
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
