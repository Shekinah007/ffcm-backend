import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "jwt") {
    constructor(private configService: ConfigService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("jwtSecret")
            // secretOrKey: `${configService.get("jwtSecret")}`,
        })

    }

    async validate(payload: any) {
        console.log("Hello")
        console.log("Log", process.env.jwtSecret)
        console.log("ConfigService: ", this.configService.get<string>("jwtSecret"));
        return { user: payload.sub, username: payload.username }
    }
}