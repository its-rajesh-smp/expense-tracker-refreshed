import React, { useEffect, useState } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
function Transaction() {

  //! State To Open AddExpenseCard
  const[setAddExpenseCard_BOOL,setAddExpenseCard_FUNC]=useState(false)

  //! Grab Data From InputField CHILD ➡️ PARENT DATA FLOW
  function grabDataOnButtonSubmit(e){
    console.log(e);
  }


  return (

    <>
      <AddHoverBtn onClickAddExpenseCardOpen={setAddExpenseCard_FUNC} />

      {setAddExpenseCard_BOOL && <AddExpenseCard onClickAddExpenseCardClose={setAddExpenseCard_FUNC} onClickSubmitSendDataToTransaction={grabDataOnButtonSubmit}/> }

      <FilterField />

      <TotalAmount amount={200} />


     


    </>
  );
}
export default Transaction;
