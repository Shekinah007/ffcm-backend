import { Body, Controller, Get, Param, Patch, Post, UseGuards, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtGuard } from '../auth/guards/jwt-auth.guard';
import { UserComment } from './dto/addComments.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtGuard)
    @Get("/profile")
    getProfile(@Request() req) {
        console.log("Profile", req.user.user)
        return this.userService.getUserByUsername(req.user.username)
        return req.user
    }

    @UseGuards(JwtGuard)
    @Get("/secretMessage")
    getSecret(@Request() req) {
        // console.log("Secret message");
        console.log("Req: ", req.user.username)
        return "The secret message."
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

    @Patch("/addComment")
    async addComment(@Body() comment: UserComment) {
        return await this.userService.addComment(comment)
    }




}
