import { useState } from "react";
import { Center, HStack, VStack } from "./BootstrapStack";

import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./style/productcard.css";
import Cookies from "js-cookie";
import {
  useAddToCartForGuestMutation,
  useAddToCartMutation,
  useAddWishlistMutation,
} from "../state/api";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  const [onMouseOver, setOnMouseOver] = useState(false);

  const auth = useSelector((state) => state.auth);

  const onMouseOverHandler = () => {
    setOnMouseOver(true);
  };

  const onMouseOutHandler = () => {
    setOnMouseOver(false);
  };

  const { name, images, price, mrp, _id } = data;
  const [addToCartForGuest] = useAddToCartForGuestMutation();
  const [addToCart] = useAddToCartMutation();
  const [addWishlist] = useAddWishlistMutation();

  const onAddToCartForUser = async () => {
    try {
      const items = {
        productId: _id,
        quantity: 1,
      };
      const { data } = await addToCart(items);

      if (data.message) {
        toast.success(data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCartForGuest = async () => {
    console.log(_id);
    const items = {
      productId: _id,
      quantity: 1,
      guestId: Cookies.get("guestId"),
    };

    const res = await addToCartForGuest(items);
    console.log(res.data);
  };

  const onAddToCart = async () => {
    if (auth.isAuthenticated && auth.token) {
      console.log(localStorage.getItem("user-token"));
      onAddToCartForUser();
    } else {
      handleAddToCartForGuest();
    }
  };

  const onAddToFavorites = async () => {
    try {
      const product = {
        productId: _id,
      };

      const data = await addWishlist(product);
      console.log(data);

      if (data.data.message) {
        toast.success(data?.data?.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card  pb-3 product-main-card"
      onMouseOver={onMouseOverHandler}
      onMouseOut={onMouseOutHandler}
      style={{
        backgroundColor: onMouseOver ? "#D93B34" : "white",
      }}
    >
      <div className="card-body product-card-body">
        <HStack className="justify-content-between ">
          <button
            className="btn btn-link "
            onClick={onAddToFavorites}
            style={{ color: onMouseOver ? "white" : "#D93B34" }}
          >
            <FiHeart />
          </button>
          <button
            className="btn btn-link"
            style={{ color: onMouseOver ? "white" : "#D93B34" }}
            onClick={onAddToCart}
          >
            <FiShoppingCart />
          </button>
        </HStack>

        <Center>
          <img
            src={images[0]}
            alt={name}
            className="img-fluid product-card-img"
          />
        </Center>

        <VStack className={"mb-3"}>
          <Center>
            <h5
              className="card-title product-card-title text-center"
              style={{ color: onMouseOver ? "white" : "black" }}
            >
              {name}
            </h5>
          </Center>
          {onMouseOver ? (
            <Center className={"mt-3"}>
              <button
                className="btn btn-outline-light rounded-pill product-card-button"
                style={{
                  backgroundColor: "transparent",
                  width: "80%",
                  color: "white",
                }}
                onClick={() =>
                  navigate(`/product/${_id}`, {
                    state: { data },
                  })
                }
              >
                View Details
              </button>
            </Center>
          ) : (
            <Center className="mt-3">
              <p
                className="card-text product-card-price"
                style={{ color: onMouseOver ? "white" : "black" }}
              >
                $ {price}{" "}
                <span
                  style={{
                    textDecoration: "line-through",
                  }}
                >
                  {mrp}
                </span>
              </p>
            </Center>
          )}
        </VStack>
      </div>
    </div>
  );
};

export default ProductCard;
