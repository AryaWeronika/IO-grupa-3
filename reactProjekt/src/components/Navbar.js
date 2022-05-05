import React from 'react';
import "./Navbar.css"
import {  Link } from "react-router-dom";
import ciacho from './obrazy/ciacho.png';

const Navbar= () =>{
  return (
			<div className="header">
  <a className="tytul" href="glowna"><img className="ciacho" src={ciacho} weight={80} height={80} /><h2>Ciasteczkowa ankieta</h2></a>
  <div className="wybor2">
    <a className="logowanie" href="panel">Zaloguj się</a> 
    <a className="wybor" href="uslugi">Oceń nas</a>
    <a className="wybor" href="ankieta">Ankieta</a>
    <a className="wybor" href="glowna">Strona główna</a>
  </div>
  </div>
  );
}
export default Navbar;