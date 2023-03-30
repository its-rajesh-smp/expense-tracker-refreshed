import React from "react";
import "./AddHoverBtn.css";

function AddHoverBtn(props) {
  return (
      <div onClick={()=>{props.onClickAddExpenseCardOpen(true)}}  className="AddNew-div">+</div>
  );
}

export default AddHoverBtn;
