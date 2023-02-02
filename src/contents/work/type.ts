import { StaticImageData } from 'next/image';

export interface Work {
  id: WorkId;
  name: string;
  year: number;
  tags: string[];
  url: string;
  image: StaticImageData;
}

export enum WorkId {
  My = '关于我',
  Blog = 'blog'
}