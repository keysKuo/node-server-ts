// import { Checkout } from "../entities/Checkout.entity";
import { Types } from "mongoose";

export type Checkout = {}

export interface CheckoutRepository {
	findAll(): Promise<Checkout[]>;
	findById(id: Types.ObjectId): Promise<Checkout | null>;
	create(key: Checkout): Promise<Checkout>;
	update(id: Types.ObjectId, payload: Partial<Checkout>): Promise<Checkout>;
	delete(id: Types.ObjectId): Promise<Checkout>;
}
