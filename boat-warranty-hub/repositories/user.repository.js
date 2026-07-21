import {prisma} from '@/lib/prisma';

export async function findUserByEmail(email){
    return await prisma.user.findUnique({
        where:{
            email,
        }
    })
}

export async function findUserByEmailOrPhone(identifier){
    if (!identifier) return null;
    return await prisma.user.findFirst({
        where:{
            OR: [
                { email: identifier },
                { phone: identifier }
            ]
        }
    })
}


export async function findUserById(id){
    return await prisma.user.findUnique({
        where:{
            id,
        }
    })
}


export async function createUser(data){
    return await prisma.user.create({
        data,
    })
}