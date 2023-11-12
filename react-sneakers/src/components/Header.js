import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img
            width={40}
            height={40}
            src="img/headerLogo.png"
            alt="логотип сайта"
          />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="логотип сайта" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-30 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/bookmark.svg" alt="закладки" />
            <span>Закладки</span>
          </Link>
        </li>
        <Link to="/orders">
          <li>
            <img width={18} height={18} src="img/user.svg" alt="пользователь" />
            <span>Профиль</span>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
