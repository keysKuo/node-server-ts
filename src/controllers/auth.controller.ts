import { Request, Response, NextFunction } from "express";
import { SuccessResponse } from "../middlewares/success.res";
import UserServices from "../services/user.services";
import { User } from "../entities/user.entity";

class AuthController {
	static async signUp(req: Request, res: Response, next: NextFunction) {
		const newUser: User = { ...req.body };
		return new SuccessResponse({
			code: 201,
			message: `✔️ Created new User`,
			metadata: await UserServices.create(newUser),
		}).send({ response: res });
	}
}

export default AuthController;
