import { Injectable , BadRequestException, ForbiddenException} from "@nestjs/common";
import { Auth } from "src/Interface/Auth.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as argon from 'argon2'
import { SignIn } from "src/Interface/SignIn.dto";
import {JwtService} from '@nestjs/jwt'
import {ConfigService} from '@nestjs/config'


@Injectable({})
export class AuthService{
    constructor(private primsa: PrismaService , private jwt:JwtService , private config: ConfigService){}

    async signin(dto:SignIn){
        let getUser = await this.primsa.user.findFirst({where:{email:dto?.email}})
        if(!getUser){
            throw new ForbiddenException('User Not Found')
        }
        let compare = await argon.verify(getUser.hash , dto.password)
        if(!compare){
            throw new BadRequestException('Incorrect Password')
        }
        return this.signToken(getUser.id , getUser.email)
    }
    

    async signup(dto:Auth){
        let getUser = await this.primsa.user.findFirst({where:{email:dto?.email}})
        if(getUser){
            throw new ForbiddenException('User Already Exists')
        }
        let hash = await argon.hash(dto?.password)
        let user = await this.primsa.user.create({
            select:{
                email:true,
                firstName:true,
                lastName:true,
                id:true,
                createdAt:true,
                updatedAt:true
            },
            data:{
                email:dto?.email,
                hash:hash,
                firstName:dto?.firstName,
                lastName:dto?.lastName
            }
        })
        return this.signToken(user.id , user.email)
    }

    signToken(userId: number , email:string): Promise<string>{
        let data = {
            sub:userId,
            email
        }

        return this.jwt.signAsync(data,{
            expiresIn:'15m',
            secret:this.config.get('JWT')
        })
    }
}