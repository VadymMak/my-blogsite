// ButtonComponent.js
import React from "react";
import ReactGA from "react-ga4";

// Функция для отслеживания кликов
const trackButtonClick = () => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: "Special Button",
  });
};

const ButtonComponent = () => {
  return <button onClick={trackButtonClick}>Нажми меня</button>;
};

export default ButtonComponent;
