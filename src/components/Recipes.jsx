import React from "react";
import { useState } from "react";
import "../styles/Recipes.css";
const Recipes = ({ displayName, ingSteps, img }) => {
  const [show, setShow] = useState(false);
  return (<>
  {ingSteps === undefined? <h2>Sorry We Couldn't Find What You Are Looking for</h2> :<section className="card-container">
    <h2 onClick={() => setShow(!show)}>{displayName}</h2>
    <div className="img-conatiner">
      {img === "" ? (
        ""
      ) : (
        <img
          className={`${show ? "img-photo" : "img-photo-hide"}`}
          src={img}
          alt="food recipe"
        />
      )}
    </div>
    <br />
    
    <ol className={`${show ? "order-list-reveal" : "order-list"}`}>
      {ingSteps.map((array, index) => (
        <li className="li-recipe" key={index}>{array}</li>
      ))}
    </ol>
    
  </section>}
    </>
  );
};

export default Recipes;
