import dotenv from 'dotenv';
import { createClient } from "redis";
import { Request, Response, NextFunction } from "express";
dotenv.config();
// modify redis url according
const redisUrl=process.env.redisUrl || "redis://127.0.0.1:6379";
const client=createClient({
  url: redisUrl,
});

client.on("error", (err) => console.error("Redis Client Error", err));

async function connectRedis() {
  try {
    await client.connect();
    console.log("Connected to Redis");
  } catch (err) {
    console.error("Could not connect to Redis", err);
  }
}

connectRedis();

export const rateLimit=async(req:Request, res:Response, next:NextFunction)=>{
    const ip=req.ip;
    const requests=await client.incr(ip as string );
    if (requests===1){
        await client.expire(ip as string, 60)
    }
    //20 per minute
    if (requests>20){
        const ttl=await client.ttl(ip as string);
        res.status(429).json({ error: "Rate-Limit Reached, Try again Later after "+ttl+" seconds" });
        return;
    }
    next();
}