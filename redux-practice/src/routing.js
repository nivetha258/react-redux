import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./Store/store";
import Login from "./Login/login.js";
import NewTask from "./NewTask/newTask";
import Home from "./Home/home";

const Routed = () => {

  const state = useSelector(({ login }) => login);

  return (
    <BrowserRouter>
      {state?.isAuthenticated ? (
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/addtask" element={<NewTask />}></Route>
          <Route path="*" element={<h2>page not found</h2>}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<h4>not found</h4>}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

const Routing = () => {
  return (
    <Provider store={store}>
      <Routed />
    </Provider>
  );
};

export default Routing;
