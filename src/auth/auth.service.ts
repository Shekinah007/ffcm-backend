import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bycrypt from "bcrypt";
import { User } from 'src/user/dto/user.schema';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) { }

    async valudateUser(username: string, password: string) {
        const user = await this.userService.getUserByUsername(username)

        if (user && await bycrypt.compare(password, user.password)) {
            const { password, ...result } = user

            return result;
        }
        return null;
    }

    async login(user: User) {
        const payload = {
            username: user.username,
            sub: {
                name: user.username
            }
        }

        return {
            ...user, accessToken: this.jwtService.sign(payload)
        }
    }

}
