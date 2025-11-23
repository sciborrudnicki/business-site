export interface Transformation {
  name: string;
  photo: string;
  skills: { name: string; before: number; after: number }[];
  tags: string[];
  title: string;
}