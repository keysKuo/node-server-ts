import JWT from "jsonwebtoken";
import crypto from "crypto";
import { ACCESS_TOKEN_EXPIRY, KeyPair, REFRESH_TOKEN_EXPIRY, TokenPair } from "../constants";
import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from "jsonwebtoken";
import { Types } from "mongoose";
import bcrypt from 'bcrypt';

interface UserPayload extends JwtPayload {
	userId: Types.ObjectId
}


export const catchAsync = (fn: any) => {
	return (req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};
};

export const generateKeys = (): KeyPair => {
	const privateKey: string = crypto.randomBytes(64).toString("hex");
	const publicKey: string = crypto.randomBytes(64).toString("hex");

	return { privateKey, publicKey };
};

export const generateTokens = (payload: UserPayload, keys: KeyPair): TokenPair => {
	const accessToken: string = JWT.sign(payload, keys.publicKey, {
		expiresIn: ACCESS_TOKEN_EXPIRY,
	});

	const refreshToken: string = JWT.sign(payload, keys.privateKey, {
		expiresIn: REFRESH_TOKEN_EXPIRY,
	});

	return { accessToken, refreshToken };
};

export const verifyTokens = async (token: string, secretKey: string): Promise<any> => {
	return JWT.verify(token, secretKey, (err, decode) => {
		if (err) return null;
		return decode as UserPayload;
	});
};

export const hashedBcrypt = async (str: string): Promise<string> => {
    return await bcrypt.hash(str, 10);
}

export const matchedBcrypt = async (str: string, hashed: string): Promise<boolean> => {
    return await bcrypt.compare(str, hashed);
}

export const calculateOrderAmount = (items: any[]) => {
	return 0;
};
