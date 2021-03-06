import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import UpdateUser from "./components/UpdateUser/UpdateUser";
import Users from "./components/Users/Users";
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/users">
            <Users></Users>
          </Route>
          <Route path="/users/add">
            <AddUser></AddUser>
          </Route>
          <Route path="/users/update/:id">
            <UpdateUser></UpdateUser>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
