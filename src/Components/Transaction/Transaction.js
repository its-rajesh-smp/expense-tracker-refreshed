import React, { useContext } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import ItemCover from "../ItemCover/ItemCover";
import Item from "../Item/Item";


// Contexts
import AddExpenseCard_Context from "../../Context/AddExpenseCard_State_Context/AddExpenseCardContext";
import DataSend_Context from "../../Context/DataSendState_Context/DataSendContext";


function Transaction() {
  





  const context_addExpenseCard=useContext(AddExpenseCard_Context)


  return (
    <>
      <AddHoverBtn />

      {context_addExpenseCard.setAddCard_BOOL  &&  <AddExpenseCard/>}



      <FilterField />

      <TotalAmount />


      <ItemCover date="2023-11-11">

        <Item data={{name:"Poha",date:"2023-11-11",time:"02:50",price:"500"}} />
      
      </ItemCover>

    </>
  );
}
export default Transaction;
