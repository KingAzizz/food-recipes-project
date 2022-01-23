import React from 'react';
import { useState } from 'react';
import '../styles/Search.css'
import axios from 'axios';
import Recipes from './Recipes';
const Search = () => {
    const [searchText,setSearchText] = useState('')
    const [nameRecipe,setNameRecipe] = useState('')
    const[instructions1,setInstructions] = useState(Array)
    const [img,setImg] = useState('')
    
    const afterSearch = (search = searchText) =>{
        search.preventDefault()
        try{

            const options = {
                method: 'GET',
                url: 'http://localhost:5000/search-recipes',
                params: {query: searchText, number: '10'},
                
            };
            
            axios.request(options).then(function (response) {
                setNameRecipe(response.data["name"]);
                setInstructions(response.data.instructions)
                setImg(response.data.image)
                console.log(typeof result);
            }).catch(function (error) {
                console.error(error);
            });
        }catch(err){
            console.log(err);
        }
    }
    
    console.log(nameRecipe);
        console.log(instructions1);

  return <> <form className="form-box" onSubmit={afterSearch}>
           <h2>Search Any Food</h2>
           <br />
       <div className="input-group">
				<label className="input-underlined">
				  <input required onChange={(e) => setSearchText(e.target.value)} />
				  <span className="input-label">Search</span>
                  <button type="submit">
                <i className="fas fa-search"></i>
                </button>
				</label>
			</div>
  <div className="search-container">

  </div>
  </form>
    {searchText.length > 2 && nameRecipe === "" ? <div className="loading" style={{bottom:'220px'}}><div></div><div></div><div></div><div></div></div> :<>
   {nameRecipe === ''? 'nothing yet' : <Recipes displayName={nameRecipe} ingSteps={instructions1} img={img}  />}
   </>}
  </>
  
  
     
};

export default Search;
