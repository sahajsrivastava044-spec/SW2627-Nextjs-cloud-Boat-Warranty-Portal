import data from "../../../../db.json"

export async function GET(request, { params }) {
    const {serial}=await params;
    const warranty=await data.warranties.find(w=>w.serial===serial);
    if (!warranty){
        return Response.json({
            success:false,
            message:"Warranty not found"
        },{status:404});
    }
    return Response.json({
        success: true,
        ...warranty
    });
}