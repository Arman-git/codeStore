import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";

function Card({
  id,
  parentId,
  onFavorite,
  title,
  imageUrl,
  price,
  onPlus,
  added = false,
  loading = false,
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const obj = {id, parentId: id, title, imageUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={170}
          height={265}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="155" />
          <rect x="0" y="163" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="184" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="206" rx="5" ry="5" width="70" height="28" />
          <rect x="93" y="204" rx="5" ry="5" width="51" height="30" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? "img/liked.svg" : "img/unliked.svg"}
                alt=""
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={isAdded ? "img/checked.svg" : "img/btn-plus.svg"}
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
