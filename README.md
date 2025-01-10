# KoinX Cryptocurrency Tracker with Node.js and MongoDB

Welcome to the Ashutosh Sharma's Koinx Backend internship's task solution. This project is a server-side application that tracks the prices, market cap, and 24-hour changes of popular cryptocurrencies like Bitcoin, Matic, and Ethereum. It fetches the latest data from CoinGecko API and stores it in a MongoDB database using a scheduled background job. The application also provides APIs to retrieve the latest stats and calculate the standard deviation of prices over time.


## Technologies Used

**Node.js:** Backend framework.

**Express:** Web framework for building APIs.

**MongoDB:** Database to store transactions and Ethereum prices.

**Cron Jobs:** For scheduling tasks (fetching Ethereum prices every 10 minutes).

**dotenv:** Environment variable management


## Project Structure

Here's an overview of files Structure

```bash
.
├── config/
│   └── db.js             # MongoDB connection
├── jobs/
│   └── crypto.js # Background job logic
├── models/
│   └── crypto.js         # MongoDB schema
├── routes/
│   └── cryptoRoute.js   # API routes
├── cronJob.js           # Cron job setup
├── app.js               # Main server file
├── .env                 # Environment variables
└── package.json

```
    
## Features
- Automated background job that fetches cryptocurrency data every 2 hours.
- Stores price, market cap, and 24-hour change in a MongoDB collection.
- RESTful APIs to get the latest stats and calculate the standard deviation of prices.
- Uses Node.js, Express, MongoDB, and node-cron for scheduling tasks.


## Installation and Setup

**Prerequisites**
- Node.js (>=14.x)
- MongoDB (Local or MongoDB Atlas)
- Etherscan API Key (you can generate one here)
- CoinGecko API (used directly in the project, no API key required)

**Steps to Setup**
- Clone the repository:
```bash
git clone https://github.com/ashutoshsharma9758/KoinX-Backend.git
cd KoinX-Backend
```
- Install dependencies:
```bash
npm install
```
- Run the project:
```bash
node app.js
```
**The server will start on http://localhost:8000.**


## API Endpoints

- **1. Fetch Latest Stats**
**Endpoint:** /api/stats
- Method: GET
**Query Parameters:**
- coin: bitcoin, matic-network, or ethereum 
**Response:** 
```bash 
{
  "price": 95406,
  "marketCap": 1888347392691.0684,
  "24hChange": 3.48
}
```

- **2. Get Standard Deviation of Price**
**Endpoint:** /api/deviation
- Method: GET
**Query Parameters:** 
- coin: bitcoin, matic-network, or ethereum
**Response:**
```bash 
{
  "deviation": 4082.48
}
```

## Acknowledgements

Thank you for taking the time to review my code. Happy coding!
