import { Category } from "../Product";

export interface DetailItem {
    id?: number;
    title?: string;
    price?: number;
    description?: string;
    images?: string[] | undefined;
    category?: Category;
    creationAt?: string;
    updatedAt?: string;
  }