import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";
//import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.log(join(__dirname+"/../views"));
 // useContainer(app.select(AppModule), { fallbackOnErrors: true });
// app.use(Express.static(__dirname + "/views"));

//  app.useStaticAssets(join(__dirname+"/../public"));
  app.setBaseViewsDir(join(__dirname+"/../views"));

  app.setViewEngine('ejs');
  //app.enableCors();

  await app.listen(3000);
}
bootstrap();
