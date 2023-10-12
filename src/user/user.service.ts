import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dto/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel) { }

    async getUsers() {
        return await this.userModel.find();
    }

    async getUserByUsername(username: string) {
        return await this.userModel.findOne({ username: username })
    }
}
