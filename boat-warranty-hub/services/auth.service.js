import { createUser, findUserByEmail } from "../repositories/user.repository";


export async function registration(data){
    const existingUser = await findUserByEmail(data.email);

    if(existingUser){
        throw new Error("User already exists");
    }

    const user = await createUser(data);

    const {password, ...safeUser} = user;

    return safeUser;
}

