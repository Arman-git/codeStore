import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductquery } from "../api/ApiSlice";
import { ROUTES } from "../../../utils/routes";
import Product from "../../Products/Product";

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductquery({ id });

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES);
    }
  }, [isLoading, isFetching, isSuccess]);

  return !data ? (
    <section className="preloader">Loading...</section>
  ) : (
    <div>
      <Product {...data} />
    </div>
  );
};

export default SingleProduct;
