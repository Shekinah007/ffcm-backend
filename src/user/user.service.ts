import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/user.schema';
import { AddUser } from './dto/addUser.dto';
import * as bcrypt from "bcrypt"
import { UserComment } from './dto/addComments.dto';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel,
        private config: ConfigService
    ) { }

    async createUser(user: AddUser) {
        const hash = await bcrypt.hash(user.password, 10);
        return await this.userModel.create({ username: user.username, password: hash, comments: [] })
    }
    async getUsers() {
        console.log(this.config.get("jwtSecret"))
        return await this.userModel.find();
    }

    async getUserByUsername(username: string) {
        return await this.userModel.findOne({ username: username })
    }

    getHiddenFuncion() {
        return "This is the Secret Place"
    }

    async addComment(comment: UserComment) {
        // return await this.userModel.findOneAndUpdate({ username: comment }, { comments: ["This is the mountain lion"] })
        return await this.userModel.updateOne(
            { username: "Mountain Lion" },
            { $push: { comments: comment.comment } }
        )
    }
}
