import { Injectable} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService{
    constructor(private primsa: PrismaService){}
    signin(){
        
        return {message:'sign u['}
    }
    
    signup(body){
        return {message:body}
    }

}