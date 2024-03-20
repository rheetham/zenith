import React from "react";
import "./Home.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import TimelineIcon from "@mui/icons-material/Timeline";
import PomodoroTimer from "../timer/pomo";
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
      <div>
        <PomodoroTimer />
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
