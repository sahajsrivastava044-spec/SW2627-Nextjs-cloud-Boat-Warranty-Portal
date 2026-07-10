import { NextResponse } from "next/server";
import { registration } from "../../../../services/auth.service";

export async function POST(request){
    try {
        const body = await request.json();

        const user = await registration(body);

        return NextResponse.json({
            success:true,
            data:user
        },{status:201});
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message
        },{status:500})
    }
}