import React, { useContext, useRef } from "react";
import "./AddExpenseCard.css";
import { BlurCard } from "../Cards/Card"
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";

// Context
import ADDEDITCARD_CONTEXT from "../../Context/AddEditCard/AddEditCardContext";
import DATASETTER_CONTEXT from "../../Context/DATASETTER/DataSeterContext";

function AddExpenseCard() {
  //* Context To Toggle AddExpenseCard
  const context_AddExpenseCard = useContext(ADDEDITCARD_CONTEXT)

  //* Context To Send Data To dataSeterState
  const context_dataSetter = useContext(DATASETTER_CONTEXT)


  //! Function To Toggle off AddExpenseCard
  function closeAddExpenseCardOnclick() {
    context_AddExpenseCard.TOGGLE_CARD_FUNC(false)
  }




  //Reference of input
  const name = useRef()
  const date = useRef()
  const time = useRef()
  const price = useRef()

  //! Function To Send , Grab Data 
  function grabDataOnButtonClick() {
    const newObject = {
      name: name.current.value,
      date: date.current.value,
      time: time.current.value,
      price: Number(price.current.value)
    }
    // Send Data Object to DataSeterState
    context_dataSetter.GETDATA_FUNC(newObject)
    // Close The Card
    context_AddExpenseCard.TOGGLE_CARD_FUNC(false)
  }







  return (
    // =====================
    <BlurCard>
      <div className="Add_Card">
        <TitleWithIcon
          title="Add"
          icon={
            <i
              className="bx bx-window-close"
              onClick={closeAddExpenseCardOnclick}
            ></i>
          }
        />

        <InputFieldAddEdit refs={{ name, date, time, price }} />

        <button className="Add_Card-button">
          <i
            className="bx bxs-message-square-add"
            onClick={grabDataOnButtonClick}
          ></i>
        </button>
      </div>
    </BlurCard>
    // =====================
  );
}

export default AddExpenseCard;
