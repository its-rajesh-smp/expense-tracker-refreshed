import React from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import ItemCover from "../ItemCover/ItemCover";
import Item from "../Item/Item";
import ADDEDITCARD_CONTEXT from "../../Context/AddEditCard/AddEditCardContext"; 
import DATASETTER_CONTEXT from "../../Context/DATASETTER/DataSeterContext";
import { useContext } from "react";


function Transaction() {
  // Context To Toggle AddExpenseCard
  const context_AddExpenseCard=useContext(ADDEDITCARD_CONTEXT)
         
         
  // Context To Get Data
  const context_DataSetterState=useContext(DATASETTER_CONTEXT)


 





  return (
    <>
      <AddHoverBtn />

      {context_AddExpenseCard.TOGGLE_CARD_BOOL && <AddExpenseCard/>}



      <FilterField />

      <TotalAmount />


      {context_DataSetterState.SETDATA}


    </>
  );
}
export default Transaction;
