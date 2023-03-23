import React, { useState } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";

function Transaction() {




  return (

    <>


      <AddHoverBtn/>




      <FilterField />


      <TotalAmount amount={200} />


     


    </>
  );
}
export default Transaction;
