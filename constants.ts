import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 'personality',
    text: 'How would you describe your personality?',
    type: 'choice',
    options: ['Adventurous & Energetic', 'Elegant & Sophisticated', 'Minimalist & Modern', 'Bold & Confident'],
  },
  {
    id: 'color',
    text: 'Which color resonates with you the most?',
    type: 'color',
  },
  {
    id: 'gender',
    text: 'What is your gender identity?',
    type: 'gender',
    options: ['Masculine', 'Feminine', 'Unisex'],
  },
  {
    id: 'age',
    text: 'Which age range best describes you?',
    type: 'choice',
    options: ['Under 18', '18-25', '26-35', '36-50', '50+'],
  },
  {
    id: 'budget',
    text: 'What is your typical fragrance budget?',
    type: 'choice',
    options: ['Affordable ($<50)', 'Designer ($50-150)', 'Niche ($150+)'],
  },
  {
    id: 'fruit',
    text: 'What is your favorite fruit?',
    type: 'text',
  },
  {
    id: 'vegetable',
    text: 'And your favorite vegetable?',
    type: 'text',
  },
];

export const colors: string[] = [
  '#ef4444', '#f97316', '#f59e0b', '#84cc16', 
  '#22c55e', '#10b981', '#14b8a6', '#06b6d4', 
  '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', 
  '#d946ef', '#ec4899', '#f43f5e', '#78716c'
];

export const loadingMessages: string[] = [
    "Analyzing your color profile...",
    "Decoding your personality...",
    "Searching the scent archives...",
    "Consulting with master perfumers...",
    "Crafting your unique scent DNA..."
];