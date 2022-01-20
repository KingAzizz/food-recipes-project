const express = require('express')
const axios = require('axios')
const cors = require('cors');
const PORT = 5000;
const app = express();
require('dotenv').config()
app.use(cors())




app.get('/list',(req,res) => {
    const options = {
        method: "GET",
        url: "https://yummly2.p.rapidapi.com/feeds/list",
        params: { limit: "18", start: "0", tag: "list.recipe.popular" },
        headers: {
          "x-rapidapi-host": "yummly2.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPID_KEY,
        },
      };
  
      axios
        .request(options)
        .then((response) => {
          const result = response.data.feed
          res.json(result)
          
        })
        .catch((error) => {
          console.error(error);
        });
})

app.listen(PORT, () => console.log("server up"))