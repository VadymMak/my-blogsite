// src/analytics.js
import ReactGA from "react-ga4";

// Инициализируем Google Analytics с вашим идентификатором
export const initGA = () => {
  ReactGA.initialize("G-XJDT86L2YW"); // Укажите свой идентификатор
};

// Отправка события просмотра страницы
export const trackPageview = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
