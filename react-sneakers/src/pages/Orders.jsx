import React from "react";
import Card from "../components/Card";
import axios from "axios";
import AppContext from "../context";

const Orders = () => {
  const { isItemAdded } =
    React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://654a64d21f197d51e4922ec3.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        //   console.log(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов!");
      }
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : orders).map((item, index) => (
          <Card
            key={index}
            // onFavorite={(obj) => onAddToFavorite(obj)}
            // onPlus={(obj) => onAddToCart(obj)}
            added={isItemAdded(item && item.id)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;
