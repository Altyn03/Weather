import React from "react";
import styles from "./DashboardItem.module.scss";

export default function DashboardItem({ weather, deleteCard }) {
  return (
    <div className={styles.item}>
      <h4>{weather.name}</h4>
      <div className={styles.temp}>
        <img src={weather.icon} alt="погода" />
        <span>{weather.temperature}°C</span>
      </div>
      <div className={styles.info}>
        <span>Ветер: {weather.wind} м/с</span>
        <br />
        <span>Давление: {weather.pressure} мм</span>
      </div>
      <button onClick={() => deleteCard(weather.id)} className={styles.x}>
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
}
