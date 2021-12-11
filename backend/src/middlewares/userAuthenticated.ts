import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';
import { ITokenPlayload } from '../resources/pix/dtos/pix.tokenplayload.dtos';

import AppError from '../shared/error/AppError';

export default function userAuthenticated(
	req: Request,
	res: Response,
	next: NextFunction
): void {

	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('Não foi enviado o JWT', 401);
	}

	const [, token] = authHeader.split(' ');

	try {
		const decoded = verify(token, authConfig.jwt.secret);

		const { sub, firstName, lastName } = decoded as ITokenPlayload;

		req.user = {
			id: sub,
			firstName,
			lastName
		};

		return next();

	} catch {
		throw new AppError('token JWT inválido', 401);
	}
}