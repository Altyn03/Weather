import React from "react";
import styles from "./Search.module.scss";
import { weather } from "../../data/data";
import { useState } from "react";

export default function Search({ setCardItems, cardItems }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const handleClickButton = () => {
    const needCity = weather.find(
      (city) => city.name.toLowerCase() === value.toLowerCase()
    );

    if (value.trim().length === 0) {
      setError("Введите название города!!!");
      return;
    } else if (needCity === undefined) {
      setError("Введите правильное название города!!!");
      return;
    } else if (cardItems.includes(needCity)) {
      setError("Вы уже добавляли этот город!!!");
      return;
    } else if (cardItems.length === 8) {
      setError("Нeльзя добавить больше 8-ми городов!!!");
      return;
    }

    setCardItems((prev) => [...prev, needCity]);
    setError("");
    setValue("");
  };

  const handleCityChange = (event) => {
    setValue(event.target.value);
  };

  const completeSearch = weather.filter((city) => {
    return city.name.toLowerCase().includes(value.toLowerCase());
  });

  const itemClick = (event) => {
    setValue(event.target.innerText);
    setIsFocus(!isFocus);
  };

  const inputClick = () => {
    setIsFocus(true);
  };

  const closeFocusOnClick = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 150);
  };

  return (
    <form action="" className={styles.search} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Введите название города"
        value={value}
        className={styles.input}
        onChange={handleCityChange}
        onClick={inputClick}
        onBlur={closeFocusOnClick}
      />
      <ul className={styles.autocomplete}>
        {isFocus
          ? completeSearch.map((weather) => {
              return (
                <li
                  className={styles.autocompleteItem}
                  key={weather.id}
                  onClick={itemClick}
                >
                  {weather.name}
                </li>
              );
            })
          : null}
      </ul>
      <button className={styles.button} onClick={handleClickButton}>
        <i className="fa-solid fa-plus"></i>
      </button>
      {error && <span className={styles.error}>{error}</span>}
    </form>
  );
}
