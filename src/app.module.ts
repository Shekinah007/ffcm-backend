
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot("mongodb://0.0.0.0:27017/ffcm"),
    // MongooseModule.forRoot(`${process.env.MONGO_URI}`),
    AuthModule, UserModule, QuestionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
