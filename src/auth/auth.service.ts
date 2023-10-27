import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.getUserByUsername(username);
        console.log("USER", user)
        console.log("Validate User: ", user)
        if (user && (await bcrypt.compare(pass, user.password))) {
            console.log("Passed validation")
            const { password, ...result } = user;
            console.log("Result: ", result)
            return result;
        }
        return null;
    }

    async login(user: any) {
        console.log("User: ", user)
        const userFull = await this.userService.getUserByUsername(user.username)

        const payload = {
            username: user.username,
            // userId: user._id
            sub: userFull.id
        }

        return {
            ...user, accessToken: this.jwtService.sign(payload)
        }
    }

}
