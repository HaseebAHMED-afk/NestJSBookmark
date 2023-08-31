import { BookmarkService } from './bookmark.service';
import { Bookmark } from 'src/Interface/Bookmark.dto';
export declare class BookmarkController {
    private bookmarkService;
    constructor(bookmarkService: BookmarkService);
    createBookmark(bookmark: Bookmark): Promise<{
        payload: Bookmark;
    }>;
    updateBookmark(id: any, bookmark: Bookmark): Promise<{
        id: any;
        payload: Bookmark;
    }>;
    deleteBookmark(id: any): Promise<{
        id: any;
    }>;
    getAllBookmarks(): Promise<{
        items: any[];
    }>;
    getBookmarById(id: any): Promise<{
        id: any;
    }>;
}
