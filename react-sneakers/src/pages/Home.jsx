import Card from "../components/Card";

const Home = ({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        // title={item.title}
        // price={item.price}
        // imageUrl={item.imageUrl}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>
          {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кросовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear cu-p"
              src="/img/btn-remove.svg"
              alt="clear"
            />
          )}
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            className=""
            placeholder="Поиск..."
          />
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
