import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="head">
        <h1 className="logo">Pomotimer</h1>
        <div className="push">
          <a href="" className="reports">
            Reports
          </a>
          <a href="" className="login">
            Login
          </a>
        </div>
      </div>

      <div className="timerBody">
        <span className="focus">focus</span>
        <div className="duo">
          <span className="timer">25:00</span>
          <a href="" className="customizationButton">
            Cus
          </a>
        </div>
        <button className="startButton btn btn-success">Start</button>
      </div>

      <div className="todoList">
        <a href="" className="addTask">
          Add a task?
        </a>
      </div>
    </div>
  );
}

export default Home;
