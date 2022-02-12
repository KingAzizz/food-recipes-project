const express = require('express')
const axios = require('axios')
const cors = require('cors');
const PORT = 5000;
const app = express();
require('dotenv').config()
app.set(cors())


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/list',(req,res) => {
    const options = {
        method: "GET",
        url: "https://yummly2.p.rapidapi.com/feeds/list",
        params: { limit: "18", start: "0", tag: "list.recipe.popular" },
        headers: {
          "x-rapidapi-host": "yummly2.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPID_KEY
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

app.get('/search-recipes',(req,res) =>{
  
  let reqSearch = req.query.query
  const options = {
    method: 'GET',
    url: `https://recipesapi2.p.rapidapi.com/recipes/${reqSearch}`,
    params: {maxRecipes: '2'},
    headers: {
      'x-rapidapi-host': 'recipesapi2.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_KEY
    }
  };
  
  axios.request(options).then((response) => {
    res.json(response.data.data["0"]);
  }).catch((error) => {
    console.error(error);
  });

})

app.listen(PORT, () => console.log("server up"))