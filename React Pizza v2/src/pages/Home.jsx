import React from 'react'

import Categories from '../Components/Categories'
import Sort from '../Components/Sort'
import PizzaBlock from '../Components/PizzaBlock'
import Skeleton from '../Components/PizzaBlock/Skeleton'

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      fetch("https://650d2478a8b42265ec2bbc08.mockapi.io/items")
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
    }, []);
  return (
    <>
         <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading 
             ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
             : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
          </div>
    </>
  )
}

export default Home