import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { IPayLoadToken } from 'helpers/modules/token/token.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
	constructor (private jwtService: JwtService) {}

	use (req: Request, res: Response, next: NextFunction) {
		const auth: string = req.headers.authorization;

		if (!auth) {
			req.user = null;
			next();
			return;
		}

		const [ syntax, token ] = auth.split(' ');
		if (syntax !== 'Bearer') {
			throw new HttpException('Invalid token', HttpStatus.FORBIDDEN);
		}

		try {
			const decoded: IPayLoadToken = this.jwtService.verify(token);

			req.user = decoded;
		} catch (error) {
			console.log(error);

			throw new HttpException(error.message, HttpStatus.FORBIDDEN);
		}

		next();
	}
}
