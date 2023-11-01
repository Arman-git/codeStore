function Header(props) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          width={40}
          height={40}
          src="/img/headerLogo.png"
          alt="логотип сайта"
        />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="логотип сайта" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img
            width={18}
            height={18}
            src="/img/bookmark.svg"
            alt="логотип сайта"
          />
          <span>Закладки</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="логотип сайта" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
