import { CartItem } from "../IteamCart";

export interface Order {
    id?: string;
    products?: CartItem[]
    totalPrice?: number;
    totalProducts?: number;
    creationAt?: Date;
}