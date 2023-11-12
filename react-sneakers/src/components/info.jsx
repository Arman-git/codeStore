import React from "react";
import AppContext from "../context";

const Info = ({ title, image, description }) => {
    const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="carEmpty d-flex align-center justify-center flex-column flex-column">
      <img
        className="mb-20"
        width="120px"
        // height="120px"
        src={image}
        alt="устая корзина"
      />
      <h2>{title}</h2>
      <p className="opacity-6">
      {description}
      </p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="img/arrow.svg" alt="стрела" />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
