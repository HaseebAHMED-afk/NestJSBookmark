import {  IsNotEmpty , IsString } from "class-validator"

export class Bookmark{

    @IsString()
    @IsNotEmpty()
    title: string;
    
    @IsString()
    @IsNotEmpty()
    link:string

    @IsString()
    description:string
}



// model Bookmark {
//     id Int @id @default(autoincrement())
//    createdAt DateTime @default(now())
//    updatedAd DateTime @updatedAt
 
//    title String
//    description String?
//    link String
 
//    userId Int
//    user  User @relation(fields: [userId] , references: [id])
 
//    @@map("bookmarks")
//  }