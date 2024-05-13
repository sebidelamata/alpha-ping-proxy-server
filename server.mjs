import fetch from 'node-fetch';
import express from 'express';
const app = express();
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

app.use(cors({
    origin: '*'
}))

app.get('/token-metadata/:tokenAddress', async(req, res) => {
    const tokenAddress = req.params.tokenAddress;
    console.log(tokenAddress)
    const url=` https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?address=${tokenAddress}`
    const response = await fetch(
        url,
        {
        headers: {
        'Accepts': 'application/json',
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY
        }
    }
    ) 
    res.json(
        await response.data.json()
    )
})

const PORT = process.env.PORT || 443;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});