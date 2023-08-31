import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    AuthModule, 
    PrismaModule, 
    UserModule, 
    BookmarkModule,
    ConfigModule.forRoot({isGlobal:true})
  ]
})
export class AppModule {}
