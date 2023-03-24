import React, { useState } from "react";
import "./AddExpenseCard.css";
import { BlurCard } from "../Cards/Card";
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";

function AddExpenseCard(props) {
  // State To Get Data Only When Add Button Is Clicked
  const [isButtonClick_BOOL, isButtonClick_FUNC] = useState(false);

  // Function To Grab Data From InputField When Submit Button Is Clicked //* CHILD ➡️ PARENT DATA FLOW
  function grabDataFromInputWhenAddButtonClick(e) {
    console.log(e);
  }


  return (
    // =====================
    <BlurCard>
      <div className="Add_Card">
        <TitleWithIcon
          title="Add"
          icon={
            <i
              onClick={() => {
                props.onClickAddExpenseCardClose(false);
              }}
              className="bx bx-window-close"
            ></i>
          }
        />

        <InputFieldAddEdit
          checkIsbuttonClicked={isButtonClick_BOOL}
          dataTaker={grabDataFromInputWhenAddButtonClick}
        />

        <button className="Add_Card-button">
          <i
            onClick={
              () => {
              isButtonClick_FUNC(true);
            }
          }
            className="bx bxs-message-square-add"
          ></i>
        </button>
      </div>
    </BlurCard>
    // =====================
  );
}

export default AddExpenseCard;
