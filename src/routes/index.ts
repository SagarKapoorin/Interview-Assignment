import Router from 'express';
import Sentiment from 'sentiment';
import { Reviews } from '../models/index.js';

export const router=Router();

router.post("/reviews",async(req,res)=>{
    try{
        const { review }=req.body;
        const sentiment=new Sentiment();
        // console.log(review);
        const result=sentiment.analyze(review);
        const sentimentScore=result.score;
        // console.log(result);
        const savedReviews=new Reviews({
            text:review,
            sentiment:sentimentScore
        })
        await savedReviews.save();
        res.status(200).json({success:true,message:savedReviews})
    }catch(err){
        console.log(err);
        res.status(400).json({message:"Internal Server Error"})
    }
})
router.get("/analysis",async(req,res)=>{
    try {
        const result=await Reviews.aggregate([
            {
                $group: {
                    _id:null,
                    TotalReviews:{ $sum: 1 },
                    AverageSentiments:{ $avg: "$sentiment" }
                }
            }
        ]);
        res.status(200).json({success:true,message:result})
    } catch (error) {
        console.error(error);
        res.status(400).json({message:"Internal Server Error"})
    }
})