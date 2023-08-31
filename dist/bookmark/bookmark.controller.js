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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarkController = void 0;
const common_1 = require("@nestjs/common");
const bookmark_service_1 = require("./bookmark.service");
const Bookmark_dto_1 = require("../Interface/Bookmark.dto");
let BookmarkController = exports.BookmarkController = class BookmarkController {
    constructor(bookmarkService) {
        this.bookmarkService = bookmarkService;
    }
    createBookmark(bookmark) {
        return this.bookmarkService.createBookmark(bookmark);
    }
    updateBookmark(id, bookmark) {
        return this.bookmarkService.updateBookmark(id, bookmark);
    }
    deleteBookmark(id) {
        return this.bookmarkService.deleteBookmark(id);
    }
    getAllBookmarks() {
        return this.bookmarkService.getAllBookmarks();
    }
    getBookmarById(id) {
        return this.bookmarkService.getBookmarById(id);
    }
};
__decorate([
    (0, common_1.Post)('createBookmark'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Bookmark_dto_1.Bookmark]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "createBookmark", null);
__decorate([
    (0, common_1.Patch)('updateBookmark/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Bookmark_dto_1.Bookmark]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "updateBookmark", null);
__decorate([
    (0, common_1.Delete)('deleteBookmark/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "deleteBookmark", null);
__decorate([
    (0, common_1.Get)('getAllBookmarks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "getAllBookmarks", null);
__decorate([
    (0, common_1.Get)('getBookmarById/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BookmarkController.prototype, "getBookmarById", null);
exports.BookmarkController = BookmarkController = __decorate([
    (0, common_1.Controller)('bookmark'),
    __metadata("design:paramtypes", [bookmark_service_1.BookmarkService])
], BookmarkController);
//# sourceMappingURL=bookmark.controller.js.map