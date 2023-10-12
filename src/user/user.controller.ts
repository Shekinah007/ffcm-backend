import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtGuard)
    @Get("/secretMessage")
    getSecret() {
        return this.userService.getHiddenFuncion()
    }

    @Get()
    getAllUsers() {
        return this.userService.getUsers();
    }


    @Get("/:username")
    getUser(@Param("username") username: string) {
        return this.userService.getUserByUsername(username)
        return username;
    }



}
