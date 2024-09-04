import { users } from "@/lib/db";
import { NextResponse } from "next/server";

// GET operation using dynamic routing
export const GET = async(req, res) => {
    const id = req.url.split('users/')[1];
    console.log(id);
    try {
        const user = users.filter((ele) => ele.id.toString() == id);
        if (user.length == 0) {
            return  NextResponse.json({message:'No data found with given id', status: 200})
        }
        return NextResponse.json({data: user});
    } catch(err) {
        return NextResponse.json({error: err});
    }

}

// DELETE operation using Delete method
export const DELETE = async(req, res) => {
    const id = req.url.split('users/')[1];
    console.log(id);
    try {
        const user = users.filter((ele) => ele.id.toString() == id);
        console.log(user)
        if (user.length == 0) {
            return  NextResponse.json({message:'No data found with given id', status: 200})
        }
        const indexOfUser = users.indexOf(user);
        users.splice(indexOfUser, 1)
        console.log(users);
        return NextResponse.json({message: "User deleted successfully"});
    } catch(err) {
        return NextResponse.json({error: err});
    }
}

// Update operation using PUT method
export const PUT = async (req, res) => {
    const id = req.url.split('users/')[1];
    console.log(id);
    const {name} = await req.json();
    console.log(name);
    try {
        const user = users.find((ele) => ele.id.toString() == id);
        user.name = name;
        console.log(users);
        return NextResponse.json({message:"Data updated successfully"});
    } catch(err) {
        return NextResponse.json({error: err});
    }
}