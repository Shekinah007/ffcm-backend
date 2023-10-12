import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }


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
