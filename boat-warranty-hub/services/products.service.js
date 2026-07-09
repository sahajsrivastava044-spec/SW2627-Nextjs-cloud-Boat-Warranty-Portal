import { createProduct, findAllProducts, findProductBySerialNumber } from "../repositories/product.repository";


export async function getAllProducts(){
    return await findAllProducts();
}

export async function addProduct(data){
    const existingProduct = await findProductBySerialNumber(data.serialNumber);

    if (existingProduct){
        return {message:"Product already exisits"};
    }

    return await createProduct(data);
}