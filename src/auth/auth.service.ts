import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";
import { User } from 'src/user/dto/user.schema';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string) {
        const user = await this.userService.getUserByUsername(username)

        if (user && (await bcrypt.compare(password, user.password))) {
            const { ...result } = user

            return { result };
        }

        return null;
    }

    async login(user: User) {
        const payload = {
            username: user.username,
            sub: {
                name: user.password
            }
        }

        return {
            ...user, accessToken: this.jwtService.sign(payload)
        }
    }

}
