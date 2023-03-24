import React, { useEffect, useState } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import DATA from "../DATA";
import ItemCover from "../ItemCover/ItemCover"
import Item from "../Item/Item"

function Transaction() {


  //! Create array and Show in dom
  let keysArray=Object.keys(DATA)



  //! State To Open AddExpenseCard
  const[setAddExpenseCard_BOOL,setAddExpenseCard_FUNC]=useState(false)

  //! Grab Data From InputField CHILD ➡️ PARENT DATA FLOW
  function grabDataOnButtonSubmit(e){
    
    let checkerDate=e.date
    // Check if that day is present in our server data or not
    if(DATA[checkerDate]){
    // Push To that existing data list
      DATA[checkerDate].push(e)
    }
    else{
    // Create a new datalist with that expense
      DATA[checkerDate]=[e]
    }
  }


  return (

    <>
      <AddHoverBtn onClickAddExpenseCardOpen={setAddExpenseCard_FUNC} />

      {setAddExpenseCard_BOOL && <AddExpenseCard onClickAddExpenseCardClose={setAddExpenseCard_FUNC} onClickSubmitSendDataToTransaction={grabDataOnButtonSubmit}/> }

      <FilterField />

      <TotalAmount amount={200} />

      {
        keysArray.map((key)=>{
          return(
          <ItemCover date={key} key={key} >
            {
              DATA[key].map((value)=>{
                return (
                  <Item
                  id={value.date+"|"+value.time}
                  key={Math.random()}/** //todo Need To be work on it */ 
                  name={value.name}
                  date={value.date}
                  time={value.time}
                  price={value.price}
                  />
                )
              })
            }
          </ItemCover>
          )
        })
      }

     


    </>
  );
}
export default Transaction;
