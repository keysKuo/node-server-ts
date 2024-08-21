import { Schema, Types, model } from "mongoose";
import { UserRepository } from "../repositories/user.repo";
import { User } from "../entities/user.entity";
import { UserModel } from "../models/user.model";

export class UserServices implements UserRepository {
	async findAll(): Promise<User[]> {
		return await UserModel.find({}).lean();
	}

	async findById(id: Types.ObjectId): Promise<User | null> {
		return await UserModel.findById(id).lean();
	}

	async create(user: User): Promise<User> {
		const newUser = new UserModel(user);
		await newUser.save();
		return newUser as User;
	}

	async update(id: Types.ObjectId, payload: Partial<User>): Promise<User> {
		return (await UserModel.findByIdAndUpdate(id, payload, {
			returnOriginal: false,
		})) as User;
	}

	async delete(id: Types.ObjectId): Promise<User> {
		return (await UserModel.findByIdAndDelete(id)) as User;
	}
}

export default UserServices;