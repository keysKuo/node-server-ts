import { Schema, Types, model } from "mongoose";

interface IUser extends Document {
	username: string;
	email: string;
	password: string;
	avatar: string;
	gender: string;
	level: string;
	googleId: string;
}

const UserSchema: Schema = new Schema(
	{
		username: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String },
		avatar: { type: String, required: true },
		gender: { type: String, enum: ["male", "female"] },
		level: {
			type: String,
			enum: ["regular", "premium", "business"],
			default: "regular",
		},
		googleId: { type: String, unique: true },
	},
	{
		timestamps: true,
	}
);

const UserModel = model<IUser>("User", UserSchema);
export { UserModel, IUser };
