require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');
const cryptoRoute=require('./routes/cryptoRoute');
const fetchCryptoData=require('./jobs/crypto');
const cron=require('node-cron');
const app = express();

// Connect to Database
connectDB();

app.use(express.json());

// Routes
app.use('/api', cryptoRoute);

// Background Job (Runs every 2 hours)
cron.schedule('0 */2 * * *', fetchCryptoData);

const PORT=process.env.PORT|| 8000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
