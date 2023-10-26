import React, { Suspense } from "react";
import Loadable from "react-loadable";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart"*/ "./pages/Cart"),
  loading: () => <div>Loading cart...</div>,
});

const FullPizza = React.lazy(
  () => import(/* webpackChunkName: "FullPizza"*/ "./pages/FullPizza")
);
const NotFound = React.lazy(
  () => import(/* webpackChunkName: "NotFound"*/ "./pages/NotFound")
);

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route
            path="cart"
            element={
              <Suspense fallback={<div>Loading cart...</div>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="pizza/:id"
            element={
              <Suspense fallback={<div>Loading cart...</div>}>
                <FullPizza />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading cart...</div>}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
