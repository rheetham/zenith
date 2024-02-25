import React from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import CrisisAlertRoundedIcon from "@mui/icons-material/CrisisAlertRounded";
function Home() {
  return (
    <div className="home">
      <div className="head">
        <div className="logo">
          <CrisisAlertRoundedIcon fontSize="large" />
          <h1>fokustimr</h1>
        </div>
        <div className="push">
          <a href="" className="reports">
            <AssessmentIcon fontSize="large" />
          </a>
          <div className="login">
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
      </div>
      <div className="timerBody2">
        <div className="timerBody">
          <span className="focus">focus</span>
          <div className="duo">
            <span className="timer">25:00</span>
          </div>
          <button className="startButton btn btn-success">Start</button>
        </div>
        <div className="customizationButton">
          <DriveFileRenameOutlineRoundedIcon fontSize="medium" />
        </div>
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
