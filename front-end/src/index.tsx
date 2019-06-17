import * as React from "react";
import * as ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import store from "@App/store";
import { Provider } from "react-redux";
import App from "@App/components/app/App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

require('dotenv').config();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
