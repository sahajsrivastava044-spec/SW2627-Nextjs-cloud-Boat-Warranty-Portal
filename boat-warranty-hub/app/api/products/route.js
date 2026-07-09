import { NextResponse } from "next/server";
import { addProduct, getAllProducts } from "../../../services/products.service";


export async function GET(){

    try {

        const products = await getAllProducts();

        return NextResponse.json(products);

    } catch(error){

        console.error(error);

        return NextResponse.json(
            {
                error:"Failed to fetch products"
            },
            {
                status:500
            }
        );
    }
}


export async function POST(){
    try {
        const body = await request.json();

        const product = await addProduct(body);

        if(product.error){
            return NextResponse.json(
                product,
                {
                    status:400
                }
            )
        }

        return NextResponse.json(
            product,
            {
                status:201
            }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {error: "Failed to create the product"},
            {status: 500}
        )
    }
}