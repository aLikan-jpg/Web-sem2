import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { config } from 'dotenv';

config();

const PORT = process.env.PORT || 3000;
console.log(process.env);
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,);
  const hbs = require('hbs');
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));

  await app.listen(PORT);
}
bootstrap();