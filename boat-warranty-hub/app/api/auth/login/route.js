import {NextResponse} from "next/server";
import { loginUser } from "../../../../services/auth.service";
import { loginSchema } from "../../../../lib/validations";
import logger from "@/lib/logger";

export async function POST(request){
    let body = {};
    try {
        body = await request.json();

        const validation = loginSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: validation.error.flatten().fieldErrors,
                },
                { status: 400 }
            );
        }

        const user = await loginUser(validation.data);

        return NextResponse.json(
            {success:true,data:user},{status:200}
        )
    } catch (error) {
        logger.error({ error, email: body?.email }, "Failed login API request");

        return NextResponse.json({success:false,message:error.message},{status:401})
    }
}