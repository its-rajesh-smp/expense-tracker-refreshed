import React, { useContext } from "react";
import "./AddHoverBtn.css";
import ADDEDITCARD_CONTEXT from "../../Context/AddEditCard/AddEditCardContext";

function AddHoverBtn(props) {

  // Context To Toggle AddExpenseCard
  const context_AddExpenseCard = useContext(ADDEDITCARD_CONTEXT)

  // Function To Toggle AddExpenseCard On Button Click
  function toggleAddExpenseCardOnClick() {
    context_AddExpenseCard.TOGGLE_CARD_FUNC(true)
  }


  return (
    <div onClick={toggleAddExpenseCardOnClick} className="AddNew-div">+</div>
  );
}

export default AddHoverBtn;
