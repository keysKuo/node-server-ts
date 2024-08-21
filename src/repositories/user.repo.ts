import { User } from "../entities/user.entity";
import { Types } from "mongoose";

export interface UserRepository {
	findAll(): Promise<User[]>;
	findById(id: Types.ObjectId): Promise<User | null>;
	create(user: User): Promise<User>;
	update(id: Types.ObjectId, payload: Partial<User>): Promise<User>;
	delete(id: Types.ObjectId): Promise<User>;
}
