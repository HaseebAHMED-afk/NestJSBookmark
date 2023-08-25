import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AuthModule, PrismaModule, UserModule, BookmarkModule]
})
export class AppModule {}
