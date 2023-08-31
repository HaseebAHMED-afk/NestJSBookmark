import { Body, Controller, Post , Patch , Delete, Get , Param} from '@nestjs/common';
import { BookmarkService } from './bookmark.service';
import { Bookmark } from 'src/Interface/Bookmark.dto';

@Controller('bookmark')
export class BookmarkController {
    constructor (private bookmarkService: BookmarkService){}

    @Post('createBookmark')
    createBookmark(@Body() bookmark:Bookmark){
        return this.bookmarkService.createBookmark(bookmark)
    }


    @Patch('updateBookmark/:id')
    updateBookmark(@Param('id') id , @Body() bookmark:Bookmark){
        return this.bookmarkService.updateBookmark(id , bookmark)
    }

    
    @Delete('deleteBookmark/:id')
    deleteBookmark(@Param('id') id){
        return this.bookmarkService.deleteBookmark(id)
    }

    @Get('getAllBookmarks')
    getAllBookmarks(){
        return this.bookmarkService.getAllBookmarks()
    }

    @Get('getBookmarById/:id')
    getBookmarById(@Param('id') id){
        return this.bookmarkService.getBookmarById(id)
    }



    
}
