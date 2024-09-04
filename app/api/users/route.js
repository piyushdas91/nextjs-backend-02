import { users } from "@/lib/db";
import { NextResponse } from "next/server"

// Read operation using GET method
export const GET = async (req, res) => {
    return NextResponse.json({data: users});
}

// Create operation using POST method
export const POST = async (req, res) => {
    const {name} = await req.json();
    console.log(name);
    try {
        const newData = {name}
        newData.id = users.length + 1;
        console.log(newData);
        users.push(newData);
        return NextResponse.json({message:"Data added successfully", data: users});
    } catch(err) {
        return NextResponse.json({error: err});
    }
}