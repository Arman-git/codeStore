import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../features/api/apiSlice";

import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  console.log(data);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME);
    }
  }, [isLoading, isFetching, isSuccess]);

  return !data ? (
    <section className="preloader">Не загрузился...</section>
  ) : (
    <>
      <Product {...data} />
      <Products products={} amount={5} title='Related' />
    </>
  );
};

export default SingleProduct;
