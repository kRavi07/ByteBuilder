import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Home from "./screen/Home/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./screen/Login/Login";
import Register from "./screen/Register/Register";
import { EditProfile } from "./screen/Profile/ProfileComponent";
import SingleOrder from "./screen/Profile/component/SingleOrder";
import Dashboard from "./screen/Profile/component/Dashboard";
import { store, persistor } from "./store";

import { Provider } from "react-redux";
import { setGuestId } from "./Util/setCookies";
import { PersistGate } from "redux-persist/integration/react";

const Cart = React.lazy(() => import("./screen/Cart/Cart"));
const Product = React.lazy(() => import("./screen/Product/ProductPage"));
const SingleProduct = React.lazy(() => import("./screen/Product/Product"));
const Profile = React.lazy(() => import("./screen/Profile/Profile"));
const MyWishList = React.lazy(() =>
  import("./screen/Profile/component/MyWishlist")
);

const OrderTracker = React.lazy(() =>
  import("./screen/Profile/component/OrderTracker")
);

const Address = React.lazy(() => import("./screen/Profile/component/Address"));

const CustomBuild = React.lazy(() =>
  import("./screen/CustomBuild/CustomBuild")
);
const MyOrder = React.lazy(() => import("./screen/Profile/component/MyOrder"));

function App() {
  setGuestId();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="products"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="cart"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="product/:id"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <SingleProduct />
              </React.Suspense>
            }
          />
          <Route
            path="build-your-own"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <CustomBuild />
              </React.Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Profile />
              </React.Suspense>
            }
          >
            <Route index element={<Dashboard />} />
            <Route
              path="my-order"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MyOrder />
                </React.Suspense>
              }
            >
              <Route path="order/:id" element={<SingleOrder />} />

              <Route
                path="order"
                element={
                  <React.Suspense fallback={<div>Loading...</div>}>
                    <MyOrder />
                  </React.Suspense>
                }
              ></Route>
            </Route>
            <Route
              path="address"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Address />
                </React.Suspense>
              }
            />
            <Route
              path="my-wishlist"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MyWishList />
                </React.Suspense>
              }
            />
            <Route
              path="track-order"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <OrderTracker />
                </React.Suspense>
              }
            />
            <Route
              path="edit-profile"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <EditProfile />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
