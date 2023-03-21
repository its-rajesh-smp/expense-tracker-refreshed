import React from "react";
import "./AddExpenseCard.css";
import { BlurCard } from "../Cards/Card";
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";



function AddExpenseCard(props) {

 
  

  return (
    <BlurCard>
      <div className="Add_Card">
        <TitleWithIcon
          title="Add"
          icon={
            <i
             
              className="bx bx-window-close"
            ></i>
          }
        />
        <InputFieldAddEdit  />
        <button className="Add_Card-button">
          <i className="bx bxs-message-square-add"></i>
        </button>
      </div>
    </BlurCard>
  );
}

export default AddExpenseCard;
