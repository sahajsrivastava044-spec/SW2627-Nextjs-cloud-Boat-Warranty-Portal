import { findProductBySerialNumber } from "@/repositories/product.repository";

export async function verifyWarranty(serialNumber){
    
    const product = await findProductBySerialNumber(serialNumber);

    // console.log(product);
    
    if(!product){
        return null;
    }

    const today=new Date();

    let warrantyStatus;

    if(!product.isActive){
        warrantyStatus="INACTIVE";
    }else{
        warrantyStatus = today<=product.warrantyExpiry?"ACTIVE":"EXPIRED";
    }

    return{
        id: product.id,
        serialNumber: product.serialNumber,
        productName: product.productName,
        purchaseDate: product.purchaseDate,
        warrantyExpiry:product.warrantyExpiry,
        warrantyStatus
    };  
}    