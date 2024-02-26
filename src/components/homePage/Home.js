import React from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import TimelineIcon from "@mui/icons-material/Timeline";
function Home() {
  return (
    <div className="home">
      <div className="head">
        <div className="logo icon">
          <TimelineIcon fontSize="large" />
          <h1>Zenith</h1>
        </div>
        <div className="push">
          <a href="" className="reports icon">
            <AssessmentIcon fontSize="large" />
          </a>
          <div className="login icon">
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
        <div className="customizationButton icon">
          <DriveFileRenameOutlineRoundedIcon fontSize="large" />
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
