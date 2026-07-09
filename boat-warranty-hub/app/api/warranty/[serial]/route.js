import { NextResponse } from "next/server";
import { verifyWarranty } from "../../../../services/warranty.service";

export async function GET(request,{params}){

    const {serial} = await params

    const result = await verifyWarranty(serial);

    if(!result){
        return NextResponse.json({
            message:"Product not found"
        },{status:404})
    }

    return NextResponse.json(result);
}