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

  //! grab the keys form localStorage
  let localKey=Object.keys(localStorage)

  //! State To Open AddExpenseCard
  const[setAddExpenseCard_BOOL,setAddExpenseCard_FUNC]=useState(false)

  //! Grab Data From InputField CHILD ➡️ PARENT DATA FLOW
  function grabDataOnButtonSubmit(e){
    
    let checkerDate=e.date

    // Check if that day is present in our Localserver data or not
    if(localStorage.getItem(checkerDate)){
    // Form A new Array/Value with the new value+existing value of localstorage to update localstorage
      let newArrayForLocal=[...JSON.parse(localStorage.getItem(checkerDate)) , e]
      // Updating localStorage
      localStorage.setItem(checkerDate,JSON.stringify(newArrayForLocal))
    }
    else{
    // Create a new datalist with that expense and store in localStorage with that key/checkerData
      localStorage.setItem(checkerDate,JSON.stringify([e]))
    }
  }


  return (

    <>
      <AddHoverBtn onClickAddExpenseCardOpen={setAddExpenseCard_FUNC} />

      {setAddExpenseCard_BOOL && <AddExpenseCard onClickAddExpenseCardClose={setAddExpenseCard_FUNC} onClickSubmitSendDataToTransaction={grabDataOnButtonSubmit}/> }

      <FilterField />

      <TotalAmount amount={200} />

      {
        localKey.map((key)=>{
          return(
          <ItemCover date={key} key={key} >
            {
              JSON.parse(localStorage.getItem(key)).map((value)=>{
                return (
                  <Item
                  id={value.date+"|"+value.time}
                  key={Math.random()}/** Need To be work on it */ 
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
