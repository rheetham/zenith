import React, { useState, useEffect } from "react";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

const PomodoroTimer = () => {
  const [focusTime, setFocusTime] = useState(45 * 60); // 45 minutes in seconds
  const [breakTime, setBreakTime] = useState(15 * 60); // 15 minutes in seconds
  const [startText, setStartText] = useState("Start");
  const [timerType, setTimerType] = useState("focus.");
  const [timer, setTimer] = useState(focusTime);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            return prevTimer - 1;
          } else {
            // Switch between focus and break time
            setTimerType(timerType === "focus." ? "BREAK" : "focus.");
            return timerType === "focus." ? breakTime : focusTime;
          }
        });
      }, 1);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, timer, focusTime, breakTime]);

  const handleStartPause = () => {
    setStartText(isRunning ? "Start" : "Pause");
    setIsRunning(!isRunning);
  };

  return (
    <div className="timerBody2">
      <div className="timerBody">
        <span className="focus">{timerType}</span>
        <div className="duo">
          <span className="timer">
            {Math.floor(timer / 60)}:{timer % 60 < 10 ? "0" : ""}
            {timer % 60}
          </span>
        </div>
        <button
          className="startButton btn btn-success"
          onClick={handleStartPause}
        >
          {startText}
        </button>
      </div>
      <div className="customizationButton">
        <DriveFileRenameOutlineRoundedIcon fontSize="medium" />
      </div>
    </div>
  );
};

export default PomodoroTimer;
