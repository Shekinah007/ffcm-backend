
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot("mongodb://0.0.0.0:27017/ffcm"),
    MongooseModule.forRoot('mongodb+srv://shalomsheks:shekssheks@nodetuts.m5oxomk.mongodb.net/ffcm'),
    AuthModule, UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
