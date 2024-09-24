import mongoose from "mongoose";
import getConfig from "./Config";
import { CustomError } from "../handlers/CustomError";



export const connectDb=async()=>{


    try {
        console.log("connecting to mongodb...")

        await mongoose.connect(getConfig().DATABASE_URL,{
            noDelay:true,
        });
        
        console.log("connected to mongodb 🔥")

    } catch (error:any) {
        
        throw new Error(error.message)

    }


}