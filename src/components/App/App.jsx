import React, { useState } from "react";
import { weather } from "../../data/data";
import Dashboard from "../Dashboard/Dashboard";
import Search from "../Search/Search";
import styles from "./App.module.scss";

function App() {
  const [cardItems, setCardItems] = useState([weather[0], weather[1]]);

  const deleteCard = (id) => {
    setCardItems((prev) => prev.filter((city) => id !== city.id));
  };

  return (
    <div className={styles.main}>
      <Search cardItems={cardItems} setCardItems={setCardItems} />
      <Dashboard cardItems={cardItems} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
