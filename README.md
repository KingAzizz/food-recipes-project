
![](https://img.shields.io/badge/Status-unfinished%20project-red?style=for-the-badge&logo=)
![](https://img.shields.io/github/v/release/kingazizz/food-recipes-project?style=for-the-badge)
![](https://img.shields.io/github/license/kingazizz/food-recipes-project?style=for-the-badge)

# Built With 
<ul>
<li>HTML/CSS</li>
<li>Reactjs</li>
<li>Axios</li>
<li>Nodejs</li>
<li>Express</li>
<li>Rapid API</li>
</ul>

---
# How To Use 

### Clone the repository 



  <code>
 https://github.com/KingAzizz/food-recipes-project.git
  </code>

<br>


.then
```bash
npm install
```

### Create .env file and add your api key or just put it in the server.js instead of <strong> process.env.RAPID_KEY </strong>
<br>
.then

```bash
npm start
```
Enjoy🥳
---
# routes documentation
```javascript
app.get('/list',(req,res) => {

const  options  = {

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

const  result  =  response.data.feed

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
```
---

### if you have any questions please feel free to contact me 
<p style="display:flex; justify-content:center;">
<a href="https://twitter.com/xilAziz"> <img src ="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" width="60px"></a>
<a href="mailto:azizalsunaydi@gmail.com"> <img src ="https://www.freeiconspng.com/uploads/file-tk-email-icon-svg-28.png" width="60px"></a>
</p>

