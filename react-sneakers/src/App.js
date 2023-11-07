import { Routes, Route } from "react-router-dom";
import React from "react";
import axios from "axios";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Home from "../src/pages/Home";
import Favorites from "../src/pages/Favorites";
import AppContext from "./context";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const itemResponse = await axios.get(
        "https://654217f9f0b8287df1ff831b.mockapi.io/items"
      );

      const cartResponse = await axios.get(
        "https://654217f9f0b8287df1ff831b.mockapi.io/cart"
      );

      const favoriteResponse = await axios.get(
        "https://650d2478a8b42265ec2bbc08.mockapi.io/favoritess"
      );

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoriteResponse.data);
      setItems(itemResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://654217f9f0b8287df1ff831b.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://654217f9f0b8287df1ff831b.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://654217f9f0b8287df1ff831b.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://650d2478a8b42265ec2bbc08.mockapi.io/favoritess", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, setCartOpened, setCartItems }}>
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
                cartItems={cartItems}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/Favorites" exact element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
