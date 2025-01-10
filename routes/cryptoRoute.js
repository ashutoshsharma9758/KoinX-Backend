const express=require('express');
const CryptoData=require('../models/crypto');
const router=express.Router();

// Task 2: Latest Crypto Data
router.get('/stats', async(req, res)=>{
  try{
    const{coin}=req.query;
    const latestData=await CryptoData.findOne({coin}).sort({timestamp:-1});
    if (!latestData) return res.status(404).json({message:'No data found'});
    res.json({
      price:latestData.price,
      marketCap:latestData.marketCap,
      '24hChange':latestData.change24h,
    });
  }catch(error){
    res.status(500).json({error: error.message});
  }
});

// Task 3: Standard Deviation Calculation
router.get('/deviation', async(req, res)=>{
  try{
    const{coin}=req.query;
    const data=await CryptoData.find({coin}).sort({timestamp:-1}).limit(100);
    if(data.length===0) return res.status(404).json({message:'No data found'});
    const prices=data.map((record)=>record.price);
    const mean=prices.reduce((a, b)=>a+b, 0)/prices.length;
    const variance=prices.reduce((sum, price)=>sum+Math.pow(price-mean, 2), 0)/prices.length;
    const deviation= Math.sqrt(variance).toFixed(2);
    res.json({deviation:parseFloat(deviation)});
  }catch(error){
    res.status(500).json({error:error.message});
  }
});

module.exports=router;
