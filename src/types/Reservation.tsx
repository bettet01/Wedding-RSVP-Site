import {Guest} from "./Guest";

export type Reservation = {
    guests?: Guest[];
    children?: number;
}