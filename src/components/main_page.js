import React, { useState, useEffect } from 'react';

const MainPage = () => {
  const [timer, setTimer] = useState(25 * 60); // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, timer]);

  const handleStartPause = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setUsername('');
    } else {
      // Perform login logic here
      setUsername('JohnDoe');
    }

    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <div>
      <header>
        <h1>Welcome, {username}</h1>
        <button onClick={handleLoginLogout}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </header>
      <div>
        <h2>Pomodoro Timer</h2>
        <p>{Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}{timer % 60}</p>
        <button onClick={handleStartPause}>
          {isRunning ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
};

export default MainPage;
