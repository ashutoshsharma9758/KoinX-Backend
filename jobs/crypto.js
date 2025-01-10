const axios=require('axios');
const CryptoData=require('../models/crypto');
const coins=['bitcoin', 'matic-network', 'ethereum'];
const fetchCryptoData=async()=>{
  try{
    for(const coin of coins){
      const response=await axios.get(
        `${process.env.COINGECKO_API_URL}?ids=${coin}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`
      );
      const data=response.data[coin];
      const newData=new CryptoData({
        coin,
        price:data.usd,
        marketCap:data.usd_market_cap,
        change24h:data.usd_24h_change,
      });
      await newData.save();
      console.log(`Data saved for ${coin}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

module.exports=fetchCryptoData;
