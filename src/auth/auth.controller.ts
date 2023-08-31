import { Controller , Post , Body , HttpCode} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Auth } from "src/Interface/Auth.dto";
import { SignIn } from "src/Interface/SignIn.dto";

@Controller('auth')
export class AuthController{
     constructor ( private authService : AuthService ){}

     @Post('signup')
     signup(@Body() dto:Auth){
          
        return this.authService.signup(dto)
    }
    
    @Post('signin')
    signin(@Body() dto:SignIn){
         return this.authService.signin(dto)
     }
}