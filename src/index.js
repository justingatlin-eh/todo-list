import React from "react";
import ReactDOM from "react-dom";
import Wrapper from "components";
import registerServiceWorker from "./registerServiceWorker";

//Add redux code here

ReactDOM.render(<Wrapper store={store} />, document.getElementById("root"));

registerServiceWorker();
