import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "../src/pages/Home";
import Favorites from "../src/pages/Favorites";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("https://654217f9f0b8287df1ff831b.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://654217f9f0b8287df1ff831b.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
    axios
      .get("https://6547bed2902874dff3acb553.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
    }, []);

  const onAddToCart = (obj) => {
    axios.post("https://654217f9f0b8287df1ff831b.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://654217f9f0b8287df1ff831b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://6547bed2902874dff3acb553.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        ></Route>
        <Route
          path="/Favorites"
          exact
          element={<Favorites items={favorites} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
