import { CartItem } from "../IteamCart";

export interface Order {
    id?: number;
    products?: CartItem[]
    totalPrice?: number;
    totalProducts?: number;
    creationAt?: Date;
}