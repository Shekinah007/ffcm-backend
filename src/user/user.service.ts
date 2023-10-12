import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/user.schema';
import { AddUser } from './dto/addUser.dto';
import * as bcrypt from "bcrypt"
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel) { }

    async createUser(user: AddUser) {
        const hash = await bcrypt.hash(user.password, 10);
        return await this.userModel.create({ username: user.username, password: hash })
    }
    async getUsers() {
        return await this.userModel.find();
    }

    async getUserByUsername(username: string) {
        return await this.userModel.findOne({ username: username })
    }
}
