export interface Testimonial {
  id: string;
  name: string;
  age: number;
  image: string;
  quote: string;
  stars: number;
  vimeoId?: string;
  aspectRatio?: 'vertical' | 'horizontal';
}

export interface CourseModule {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  color?: string;
}

export interface BonusItem {
  id: string;
  num: number;
  title: string;
  desc: string;
  value: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface DominoStep {
  id: string;
  title: string;
  icon: string;
  description: string;
  isResult?: boolean;
}
