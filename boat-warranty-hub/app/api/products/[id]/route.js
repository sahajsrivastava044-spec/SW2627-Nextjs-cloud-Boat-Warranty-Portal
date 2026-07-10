import { NextResponse } from "next/server";
import { deleteExisitingProduct, getProductById, updateExistingProduct } from "../../../../services/products.service";


export async function GET(request,context){
    try {
        const {id} = await context.params;
        const productId = Number(id);
        console.log(id);
        const product = await getProductById(productId);
        return NextResponse.json({
            success: true,
            data: product
        },{status:200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success:false,
            message:error.message
        },{status:500})
    }
}

export async function PUT(request,context){
    try {
        const {id} = await context.params;
        const productId = Number(id);
        const body = await request.json();
        const product = await updateExistingProduct(productId,body);

        return NextResponse.json({
            success:true,
            data:product
        },{status:200});
    } catch (error) {
        return NextResponse.json({
            success:false,
            message:error.message
        },{status:500});
    }
}

export async function DELETE(request,context){
    try {
        const {id} = await context.params;
        const productId = Number(id);
        await deleteExisitingProduct(productId);
        return NextResponse.json({
            success:true,
            message:"Product deleted successfully"
        },{status:200});
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            success:false,
            message:error.message
        },{status:500})
    }
}