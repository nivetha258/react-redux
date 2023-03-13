import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeProducts } from "../Store/productslice";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const array = useSelector(({ products }) => products.createproducts);
  const dispatch = useDispatch();
  const [filterPriority, setFiliterPrority] = useState(true);
  const [filterCompleted, setFilterCompleted] = useState(true);

  const filterTask = (e, property) => {
    if (property == "priority") setFiliterPrority(!filterPriority);
    if (property == "isComplete") setFilterCompleted(!filterCompleted);
  };

  const filteredArray = array.filter((a) => {
    if (a.priority === filterPriority && a.isComplete === filterCompleted)
      return a;
  });

  const removeTask = (e, name) => {
    let filtertask = array.filter((task) => name != task.name);
    dispatch(changeProducts(filtertask));
  };

  const modifyTask = (e, name, modify) => {
    let prop = modify;
    let filtertask = array.map((task, i) => {
      if (name == task.name) {
        task = { ...task, [prop]: e.target.checked };
      }
      return task;
    });
    dispatch(changeProducts(filtertask));
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          backgroundColor: "rgb(17 33 116 / 35%)",
        }}
      >
        <h1> Home Page</h1>{" "}
        <Link
          style={{ display: "block", textDecoration: "none", color: "blue" }}
          to="/addtask"
        >
          {" "}
          Add task
        </Link>
      </div>
      <h2 style={{ color: "#0019fd" }}>Filter</h2>
      <div>
        <label>
          <input
            type={"checkbox"}
            onChange={(e) => filterTask(e, "priority")}
            defaultChecked={filterPriority}
          ></input>
          Priority
        </label>
        <label>
          <input
            type={"checkbox"}
            onChange={(e) => filterTask(e, "isComplete")}
            defaultChecked={filterCompleted}
          ></input>
          completed
        </label>
      </div>
      <h2 style={{ color: "#0019fd" }}>Task List</h2>
      <div
        style={{
          display: "flex",
          padding: "10px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {filteredArray.map((task, i) => (
          <div key={i} style={{ margin: "5px", padding: "10px" }}>
            <h2>
              <b>Name :</b> {task.name}
            </h2>
            <p>
              <b>Description :</b> {task.description}
            </p>
            <p>
              <b>Priority : </b>
              <input
                type="checkbox"
                checked={task.priority}
                onChange={(e) => modifyTask(e, task.name, "priority")}
              ></input>
            </p>
            {task.isComplete && <p>hello</p>}
            <p>
              <b>Completed status :</b>
              <input
                type="checkbox"
                checked={task.isComplete}
                onChange={(e) => modifyTask(e, task.name, "isComplete")}
              ></input>
            </p>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={(e) => {
                removeTask(e, task.name);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
