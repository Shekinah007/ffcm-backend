import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";
import { User } from 'src/user/dto/user.schema';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,

    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.getUserByUsername(username);

        console.log(user)
        if (user && (await bcrypt.compare(pass, user.password))) {
            // console.log("Passed validation")
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        // const payload = {
        //     username: user.username,
        //     sub: {
        //         name: user.username
        //     }
        // }

        return {
            ...user, accessToken: this.jwtService.sign(payload)
        }
    }

}
