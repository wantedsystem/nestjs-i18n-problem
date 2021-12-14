import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json } from 'body-parser';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp({
              format: 'YYYY-MM-DD HH:mm:ss',
            }),
            winston.format.errors({ stack: true }),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('loc-api')
          ),
        }),
      ],
      exitOnError: false,
    }),
  });

  const port: number = parseInt(process.env.API_PORT, 10) || 3000;

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  );


  app.use(json({ limit: '50mb' }));

  app.enableCors();

  await app.listen(port, () => {
    Logger.log(`Express server listening on port: ${port}`);
  });
}
bootstrap();
