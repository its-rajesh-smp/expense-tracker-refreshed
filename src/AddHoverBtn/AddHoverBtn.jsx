import React from "react";
import "./AddHoverBtn.css";

function AddHoverBtn(props) {
  return (
      <div onClick={props.onClick}  className="AddNew-div">+</div>
  );
}

export default AddHoverBtn;
