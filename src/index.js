import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import App from "./Components/App/App";

// Providers
import AddExpenseCard_Provider from "./Context/AddExpenseCard_State_Context/AddExpenseCardState";
import DataSendState_Provider from "./Context/DataSendState_Context/DataSendState";

ReactDOM.render(

    
<AddExpenseCard_Provider>
<DataSendState_Provider>


<App/>


</DataSendState_Provider>
</AddExpenseCard_Provider>


,
document.querySelector("#root")
)