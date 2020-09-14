import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./Components/header";
import Counter from "./pages/Counter";
import Todolist from "./pages/To do list";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/todolist">
            <Todolist />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
