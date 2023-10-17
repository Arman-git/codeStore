import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://650d2478a8b42265ec2bbc08.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка при получений запроса!");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return 'Загрузка....'
  }

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
