 import mongoose ,{Document ,Schema } from 'mongoose';

interface Reviews_Schema extends Document{
    text:string,
    sentiment:number,
}
const Review:Schema = new Schema({
    text:{
        type:String,
        required:true,
    },
    sentiment:{
        type:Number,
        required:true,
    }
})
export const Reviews=mongoose.model<Reviews_Schema>('Revies',Review);