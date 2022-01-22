import React from 'react';
import { useState } from 'react';
const Alert = () => {
    let [showAlert,setShowAlert] = useState(true) // if the state of (showAlert) change to false it will be removed from the user screen
  return <>
 { showAlert == true ? <div className="alert">
     <button onClick={() => setShowAlert(showAlert = false)} className="alert-btn"><i className="fas fa-times"></i>
  </button> <h2>Created By Aziz</h2> 
 </div> : ""}
  </>
};

export default Alert;
