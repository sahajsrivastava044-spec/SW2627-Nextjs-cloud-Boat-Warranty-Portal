import CredentialsProvider from "next-auth/providers/credentials";
import { loginUser } from "@/services/auth.service";

export const authOptions={
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type:"email"
                },
                password:{
                    label:"Password",
                    type:"password"
                }
            },

            async authorize(credentials){
                try {
                    console.log("Authorize called");
                    console.log(credentials);
                    const user = await loginUser(credentials);
                    console.log(user);
                    return user;
                } catch{
                    return null;
                }
            }
        })
    ],

    session:{
        strategy:"jwt"
    },

    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id;
                token.role=user.role;
            }

            return token;
        },

        async session({session,token}){
            session.user = {
                ...session.user,
                id: token.id,
                role: token.role,
            };

            console.log(session.user.id);
            console.log(session.user.role);

            return session;
        }
    },
    
    secret: process.env.NEXTAUTH_SECRET,
}