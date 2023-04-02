import React, { useContext } from "react";
import "./Transaction.css";
import FilterField from "../FilterField/FilterField";
import AddHoverBtn from "../AddHoverBtn/AddHoverBtn";
import { TotalAmount } from "../SillyComponents/SillyComponent";
import AddExpenseCard from "../AddExpenseCard/AddExpenseCard";
import ItemCover from "../ItemCover/ItemCover";
import Item from "../Item/Item";
import DATA from "../../Context/DATA/DATA";

// Contexts
import AddExpenseCard_Context from "../../Context/AddExpenseCard_State_Context/AddExpenseCardContext";
import DataSend_Context from "../../Context/DataSendState_Context/DataSendContext";

function Transaction() {
  
  //! For Open Close AddExpense Card
  const context_addExpenseCard = useContext(AddExpenseCard_Context);


  // ! Linked With Storage State For Data
  const CONTEXT_DATA=useContext(DataSend_Context)
``

  //! Generating New Data For DOM
  // Keys
  const NEW_DATA_KEYS=Object.keys(CONTEXT_DATA.SET_DATA)
  // Data From Keys
  const NEW_DATA_ARRAY=NEW_DATA_KEYS.map((value)=>{
    return(
      <ItemCover date={value} key={value}>
        {
          CONTEXT_DATA.SET_DATA[value].map((innerValue)=>{
            return (
              <Item
              key={Math.random()}
              data={{
                name: innerValue.name,
                date:  innerValue.date,
                time:  innerValue.time,
                price: innerValue.price,
              }}
              />
            )
          })
        }
      </ItemCover>
    )
  })


  


  return (
    <>
      <AddHoverBtn />

      {context_addExpenseCard.setAddCard_BOOL && <AddExpenseCard />}

      <FilterField />

      <TotalAmount />

      {NEW_DATA_ARRAY}


    </>
  );
}
export default Transaction;
