import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function DucHuyRunning () {
	const app = await NestFactory.create(AppModule);
	app.use(bodyParser.json({ limit: '50mb' }));
	app.enableCors();

	app.useGlobalPipes(new ValidationPipe());

	const configService: ConfigService = app.get(ConfigService);
	const port = configService.get<string>('http.port');

	await app.listen(port, () => {
		console.log(`http://localhost:${port}/graphql`);
	});
}

DucHuyRunning();
