import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

(async function DucHuyRunning () {
	const app = await NestFactory.create(AppModule);
	const configService: ConfigService = app.get(ConfigService);

	const port = configService.get<string>('http.port');
	const limitReq = configService.get<string>('app.limit_req');

	app.use(bodyParser.json({ limit: limitReq }));
	app.enableCors();
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(port, () => {
		console.log(`http://localhost:${port}/graphql`);
	});
})();
