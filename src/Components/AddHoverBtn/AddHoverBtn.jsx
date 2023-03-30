import React,{useContext} from "react";
import "./AddHoverBtn.css";

// Context
import AddExpenseCard_Context from "../../Context/AddExpenseCard_State_Context/AddExpenseCardContext";


function AddHoverBtn(props) {


  // Open Close AddEditExpenseCard
  const context_addExpenseCard=useContext(AddExpenseCard_Context)


  return (
      <div onClick={()=>{context_addExpenseCard.setAddCard_FUNC(true)}} className="AddNew-div">+</div>
  );
}

export default AddHoverBtn;
