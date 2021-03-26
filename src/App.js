import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Route } from "react-router";
import HomeDashboard from "./Components/Pages/Home";
import UserList from "./Components/Pages/Userlist";

function App() {
  return (
    <>
      <Route exact path={"/"} component={HomeDashboard} />
      <Route exact path={"/user-list"} component={UserList} />
    </>
  );
}

export default App;
