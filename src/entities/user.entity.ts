import { Types } from "mongoose";

export type User = {
	_id: Types.ObjectId;
	username: string;
	email: string;
	password: string;
	avatar?: string;
	gender: "male" | "female";
	level: "regular" | "premium" | "business";
};

export type UserRegistedForm = Omit<User, "_id"> & {
	confirmPassword: string;
};

export type UserLoginForm = {
	email: string;
	password: string;
};

export type UserGoogleLoginForm = Omit<User, "password" | "_id"> & {
	googleId: string;
};

export type UserWithoutPassword = Omit<User, "password">;

export type UserDataResponse = {
	user: UserWithoutPassword | null;
	accessToken?: string;
	refreshToken?: string;
};
