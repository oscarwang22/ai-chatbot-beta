// Define your models here.

export interface Model {
  id: string;
  label: string;
  apiIdentifier: string;
  description: string;
}

export const models: Array<Model> = [
  {
    id: 'gemini-1206',
    label: 'Gemini Pro Preview',
    apiIdentifier: 'gemini-exp-1206',
    description: 'Most Capable Model Powering Gemini Advanced',
  },
  {
    id: 'gemini-2.0-flash',
    label: 'Gemini 2.0 Flash Preview',
    apiIdentifier: 'gemini-2.0-flash-exp',
    description: 'Fast and Advanced model in Preview.',
  },

  {
    id: 'gemini-1.5-pro',
    label: 'Gemini 1.5 Pro Stable',
    apiIdentifier: 'gemini-1.5-pro',
    description: 'Advanced Stable Release of Gemini',
  },

  {
    id: 'gemini-1.5-flash',
    label: 'Gemini 1.5 Flash Stable',
    apiIdentifier: 'gemini-1.5-flash',
    description: 'Fast Stable Release of Gemini',
  },
] as const;

export const DEFAULT_MODEL_NAME: string = 'gemini-1.5-flash';
