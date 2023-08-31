"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AuthService = exports.AuthService = class AuthService {
    constructor(primsa, jwt, config) {
        this.primsa = primsa;
        this.jwt = jwt;
        this.config = config;
    }
    async signin(dto) {
        let getUser = await this.primsa.user.findFirst({ where: { email: dto?.email } });
        if (!getUser) {
            throw new common_1.ForbiddenException('User Not Found');
        }
        let compare = await argon.verify(getUser.hash, dto.password);
        if (!compare) {
            throw new common_1.BadRequestException('Incorrect Password');
        }
        return this.signToken(getUser.id, getUser.email);
    }
    async signup(dto) {
        let getUser = await this.primsa.user.findFirst({ where: { email: dto?.email } });
        if (getUser) {
            throw new common_1.ForbiddenException('User Already Exists');
        }
        let hash = await argon.hash(dto?.password);
        let user = await this.primsa.user.create({
            select: {
                email: true,
                firstName: true,
                lastName: true,
                id: true,
                createdAt: true,
                updatedAt: true
            },
            data: {
                email: dto?.email,
                hash: hash,
                firstName: dto?.firstName,
                lastName: dto?.lastName
            }
        });
        return this.signToken(user.id, user.email);
    }
    signToken(userId, email) {
        let data = {
            sub: userId,
            email
        };
        return this.jwt.signAsync(data, {
            expiresIn: '15m',
            secret: this.config.get('JWT')
        });
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, jwt_1.JwtService, config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map