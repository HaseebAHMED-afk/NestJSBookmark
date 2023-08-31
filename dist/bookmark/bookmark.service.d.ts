import { Bookmark } from 'src/Interface/Bookmark.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BookmarkService {
    private prismaService;
    constructor(prismaService: PrismaService);
    createBookmark(payload: Bookmark): Promise<{
        payload: Bookmark;
    }>;
    updateBookmark(id: any, payload: Bookmark): Promise<{
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
