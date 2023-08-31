import { Injectable } from '@nestjs/common';
import { Bookmark } from 'src/Interface/Bookmark.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class BookmarkService {
    constructor(private prismaService: PrismaService){}

    async createBookmark(payload:Bookmark){
        return {payload}
    }


    async updateBookmark(id , payload:Bookmark){
        return {id , payload}
    }

    async deleteBookmark(id){
        return {id}
    }
    
    async getAllBookmarks(){
        return {items:[]}
    }
    
    
    async getBookmarById(id){
        return {id}
    }

}
