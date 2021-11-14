import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import IssuesScreen from "./components/IssuesScreen/IssuesScreen";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";

const routing = (
  <Router>
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={IssuesScreen} />
          </Switch>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
