import React, { useEffect, useState } from "react";
import "./AddExpenseCard.css";
import { BlurCard } from "../Cards/Card";
import {
  TitleWithIcon,
  InputFieldAddEdit,
} from "../SillyComponents/SillyComponent";

function AddExpenseCard(props) {
  
  //! State To Send Data Request Only When Add Button Is Clicked To send Data to parent
  const [isButtonClick_BOOL, isButtonClick_FUNC] = useState(false);


  /** //!todo
  * React Cannot Render 2 thing instantly
  * We Are grabing data from input 
  * As well as we have to close the Card 
  * Is not allowed
  * So I used useEffect
  * Whenever the button is Clicked we are seting isButtonClick_BOOL == true
  * As we used state here that means this component is rerender for this function call isButtonClick_FUNC
  * After function call isButtonClick_BOOL become true
  * So I used to do when after render isButtonClick_BOOL is true only then close that card
  */

  
  useEffect(()=>{
    if(isButtonClick_BOOL){
      props.onClickAddExpenseCardClose(false);
    }
  },[isButtonClick_BOOL])


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
          grabDataOnButtonSubmit={props.onClickSubmitSendDataToTransaction}
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
