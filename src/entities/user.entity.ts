import { Types } from 'mongoose';

export type User = {
    _id: Types.ObjectId,
    username: String,
    email: String,
    password: String,
    avatar: String,
    gender: "male" | "female",
    level: "regular" | "premium" | "business",
    readonly googleId: String
}
