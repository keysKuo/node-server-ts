import { User } from "./user.entity";
import { Types } from "mongoose";

export type KeyStore = {
	_id: Types.ObjectId;
	user: User | Types.ObjectId;
	publicKey: String;
	privateKey: String;
	refreshTokenUsed: String[];
	refreshToken: String;
};
