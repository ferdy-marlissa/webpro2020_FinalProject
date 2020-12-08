import React, { useEffect, useState } from 'react';
import axios from "axios"
import "../App.css"
import NumberFormat from "react-number-format";

const Global = () => {
  const [confirmed, setConfirmed] = useState("");
  const [deaths, setDeaths] = useState("");
  const [recovered, setRecovered] = useState("");
  useEffect(() => {
    axios 
     .get("https://covid19.mathdro.id/api")
     .then((response) =>
     { 
    setConfirmed(response.data.confirmed.value);
     setDeaths(response.data.deaths.value);
     setRecovered(response.data.recovered.value);
    })  
 }, []);

 return (
   
    <div >
     <h1>Kasus Covid-19 keseluruhan Global</h1>
     <div className= "cont">
      <h1 className = "positif"> 
      <p>Positif</p>
      <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> 
      </h1>
      
      <h1 className="meninggal">
        <p>Meninggal</p>
        <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
      </h1>
      <h1 className="sembuh">
        <p>sembuh</p>
        <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
      </h1>  
    </div>
    </div>

  )
 
};
export default Global;
