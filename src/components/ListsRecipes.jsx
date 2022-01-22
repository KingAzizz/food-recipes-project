import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import '../styles/Recipes.css'
const ListsRecipes = () => {
  const [all,setAll] = useState('')

  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:5000/list",
      params: { limit: "18", start: "0", tag: "list.recipe.popular" },
    };

    axios
      .request(options)
      .then((response) => {
        setAll(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  return (
    <>
    
    {all === ''? <div className="loading"><div></div><div></div><div></div><div></div></div> :<>
      <Recipes displayName={all["0"].display.displayName} ingSteps={all["0"].content.preparationSteps} img={all["0"].display.images["0"]} />
      <Recipes displayName={all["1"].display.displayName} ingSteps={all["1"].content.preparationSteps} img={all["1"].display.images["0"]} />
      <Recipes displayName={all["2"].display.displayName} ingSteps={all["2"].content.preparationSteps} img={all["2"].display.images["0"]} />
    </>}
    </>
  );
};

export default ListsRecipes;
