import {PrismaClient} from "@prisma/client";  // importing the JavaScript client that prisma generated from our schema 

const globalForPrisma = global;

export const prisma = globalForPrisma.prisma || new  PrismaClient({   // new PrismaClient() knows 
    log:["query","warn","error"],
});

if (process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma=prisma;
}

