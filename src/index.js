import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import App from "./Components/App/App";
// Provider
import ADDEDITCARD_PROVIDER from "./Context/AddEditCard/AddEditCardState";
import DATASETTER_PROVIDER from "./Context/DATASETTER/DataSeterState";

ReactDOM.render(

    <ADDEDITCARD_PROVIDER>
        <DATASETTER_PROVIDER>


            <App />


        </DATASETTER_PROVIDER>
    </ADDEDITCARD_PROVIDER>

    ,
    document.querySelector("#root")
)