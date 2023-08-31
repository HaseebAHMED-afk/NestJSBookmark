import { AuthService } from "./auth.service";
import { Auth } from "src/Interface/Auth.dto";
import { SignIn } from "src/Interface/SignIn.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: Auth): Promise<string>;
    signin(dto: SignIn): Promise<string>;
}
