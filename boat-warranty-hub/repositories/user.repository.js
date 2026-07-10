import {prisma} from '@/lib/prisma';

export async function findUserByEmail(email){
    return await prisma.user.findUnique({
        where:{
            email,
        }
    })
}


export async function findUserById(id){
    return await prisma.user.findUnique({
        where:{
            id:1,
        }
    })
}


export async function createUser(data){
    return await prisma.user.create({
        data,
    })
}