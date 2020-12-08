import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../App.css'
import NumberFormat from "react-number-format";

const Indonesia = () => {
  const [jumlahKasus, setJumlahKasus] = useState("");
  const [meninggal, setMeninggal] = useState("");
  const [sembuh, setSembuh] = useState("");
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) =>

     
     { 
    setJumlahKasus(response.data.jumlahKasus);
     setMeninggal(response.data.meninggal);
     setSembuh(response.data.sembuh);
    })  
 }, []);

 return (

  <div>
    <h1>Kasus Covid-19 di Indonesia</h1>
    <div className= "cont">
      <h1 className="positif">
        <p>Positif</p>
        <NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/>
      </h1>
      <h1 className="meninggal">
        <p>Meninggal</p>
        <NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/>
      </h1>
      <h1 className="sembuh">
        <p>sembuh</p>
        <NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/>
      </h1>  
    </div>
  </div>

)

  
};
export default Indonesia;
