import React from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import ItemCover from "../ItemCover/ItemCover";
import Item from "../Item/Item";
import ADDEDITCARD_CONTEXT from "../../Context/AddEditCard/AddEditCardContext"; 
import { useContext } from "react";


function Transaction() {
  // Context To Toggle AddExpenseCard
  const context_AddExpenseCard=useContext(ADDEDITCARD_CONTEXT)


  return (
    <>
      <AddHoverBtn />

      {context_AddExpenseCard.TOGGLE_CARD_BOOL && <AddExpenseCard/>}



      <FilterField />

      <TotalAmount />


      <ItemCover date="2023-11-11">

        <Item data={{name:"Poha",date:"2023-11-11",time:"02:50",price:"500"}} />
      
      </ItemCover>

    </>
  );
}
export default Transaction;
