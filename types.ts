export interface UserInput {
  personality: string;
  color: string;
  gender: string;
  fruit: string;
  vegetable: string;
  age: string;
  budget: string;
}

export interface AffordableAlternative {
  fragranceName: string;
  description: string;
}

export interface FragranceRecommendation {
  fragranceName: string;
  description: string;
  topNotes: string[];
  middleNotes: string[];
  baseNotes: string[];
  affordableAlternative: AffordableAlternative;
}

export interface Question {
  id: string;
  text: string;
  type: 'choice' | 'color' | 'text' | 'gender';
  options?: string[];
}