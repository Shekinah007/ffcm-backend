import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AddUser } from 'src/user/dto/addUser.dto';
import { UserService } from 'src/user/user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private userService: UserService) { }

    @UseGuards(LocalAuthGuard)
    @Post("login")
    async login(@Body() user) {
        return await this.authService.login(user)
    }

    @Post("register")
    async register(@Body() addUserDto: AddUser) {
        return await this.userService.createUser(addUserDto)
    }
}
