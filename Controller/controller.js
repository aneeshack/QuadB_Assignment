
const axios = require('axios');
const Ticker = require('../Models/Ticker');

const fetchData = async(req, res)=>{
  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const tickers = Object.values(response.data).slice(0, 10);
  
    await Ticker.sync({ force: true });

    for (const tickerData of tickers) {
      await Ticker.create({
        name: tickerData.name,
        last: tickerData.last,
        buy: tickerData.buy,
        sell: tickerData.sell,
        volume: tickerData.volume,
        base_unit: tickerData.base_unit
      });
    }
    const storedData = await Ticker.findAll();
    res.render('home',{ tickers: storedData})
    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

module.exports = {
    fetchData
};
