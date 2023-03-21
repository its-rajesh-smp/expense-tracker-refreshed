import React from "react";
import './App.css'
import Header from "../Header/Header";
import MainContainer from"../MainContainer/MainContainer"

function App(){
  return (
    <div className="main_body" >
      <Header></Header>
      <MainContainer/>
    </div>
  )
}


export default App;