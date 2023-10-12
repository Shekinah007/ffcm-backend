import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { UserService } from '../user/user.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/dto/user.schema';

@Module({
  imports: [JwtModule.register({
    secret: process.env.jwt_secret,
    signOptions: { expiresIn: "3600s" }
  }), UserModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [AuthService, UserService, JwtService],
  controllers: [AuthController]
})
export class AuthModule { }
