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
exports.BookmarkService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookmarkService = exports.BookmarkService = class BookmarkService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async createBookmark(payload) {
        return { payload };
    }
    async updateBookmark(id, payload) {
        return { id, payload };
    }
    async deleteBookmark(id) {
        return { id };
    }
    async getAllBookmarks() {
        return { items: [] };
    }
    async getBookmarById(id) {
        return { id };
    }
};
exports.BookmarkService = BookmarkService = __decorate([
    (0, common_1.Injectable)({}),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookmarkService);
//# sourceMappingURL=bookmark.service.js.map