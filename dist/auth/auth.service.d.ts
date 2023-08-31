import { Auth } from "src/Interface/Auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { SignIn } from "src/Interface/SignIn.dto";
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private primsa;
    private jwt;
    private config;
    constructor(primsa: PrismaService, jwt: JwtService, config: ConfigService);
    signin(dto: SignIn): Promise<string>;
    signup(dto: Auth): Promise<string>;
    signToken(userId: number, email: string): Promise<string>;
}
