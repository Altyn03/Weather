import React from "react";
import DashboardItem from "./Dashboard-item/DashboardItem";
import styles from "./Dashboard.module.css";
import { useState } from "react";

export default function Dashboard({ cardItems, deleteCard }) {
  const [temp, setTemp] = useState(-10);

  const filteredCard = cardItems.filter(
    (city) => Number(city.temperature) > temp
  );

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.zag}>Погода сегодня</h1>
      <div className={styles.filter}>
        <p>Где сейчас теплее, чем</p>
        <div className={styles.rangeBlock}>
          <input
            type="range"
            step="1"
            min="-20"
            max="20"
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
          />
          <div style={{ transform: `translateX(${-temp * 6.5}px)` }}>
            <span className={styles.filterTemp}>{temp}°C</span>
          </div>
        </div>
      </div>
      <div className={styles.dashboardItems}>
        {filteredCard.map((weather) => {
          return (
            <DashboardItem
              weather={weather}
              key={weather.id}
              deleteCard={deleteCard}
            />
          );
        })}
      </div>
    </div>
  );
}
