import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const randomNotification = () => {
    const notificationPopup = new window.Notification("TEST", {
      body: "You subscribed Noti Service!",
    });
    console.log("notificationPopup", notificationPopup);
    setTimeout(randomNotification, 30000);
  };
  const requestAlarm = async () => {
    const notificationResponse = await window.Notification.requestPermission();
    console.log("notificationResponse", notificationResponse);
    if (notificationResponse === "granted") {
      // 권한 요청 팝업
      // Notifications API의 이점은 운영체제의 알림 기능을 사용
      setTimeout(randomNotification, 1000);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={requestAlarm}>알림요청 테스트</button>
      </header>
    </div>
  );
}

export default App;
