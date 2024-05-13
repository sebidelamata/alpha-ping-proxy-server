const express = require('express')
const app = express()
const fetch = require('node-fetch')
const cors = require('cors')
require('dotenv').config();

app.use(cors())

app.get('/token-metadata/', async(req, res) => {
    const response = await 
    response = await fetch(
        url,
        {
        headers: {
        'Accepts': 'application/json',
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY
        }
    }
    )
    response = await response.json();
})