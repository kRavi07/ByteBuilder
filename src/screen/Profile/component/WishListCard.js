import { useState } from "react";
import { Center, HStack, VStack } from "../../../component/BootstrapStack";

import { Link, useNavigate } from "react-router-dom";
import {
  useRemoveProductFromWishlistMutation,
  useGetWishlistQuery,
} from "../../../state/api";

const WishListCard = ({ data }) => {
  const navigate = useNavigate();

  const { _id, name, images, price } = data;

  const [removeProductFromWishlist] = useRemoveProductFromWishlistMutation();

  const { refetch: refetchWishlist } = useGetWishlistQuery();

  const handleRemoveWishlist = async () => {
    try {
      const res = await removeProductFromWishlist(_id);
      console.log(res);
      refetchWishlist();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card m-2 pb-2"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="card-body">
        <Link
          to={`/product/${_id}`}
          style={{
            textDecoration: "none",
          }}
        >
          <Center>
            <img
              src={images[0] && images[0]}
              alt={name}
              className="img-fluid"
              style={{ maxWidth: "100%", height: "10em", width: "10em" }}
            />
          </Center>

          <VStack className={"mb-3"}>
            <Center
              style={{
                justifyContent: "center",
              }}
            >
              <h6
                className="card-title text-center py-2"
                style={{
                  color: "black",
                  height: "2em",
                }}
              >
                {name}
              </h6>
            </Center>

            <Center
              style={{
                justifyContent: "center",
              }}
              className="mt-3"
            >
              <strong>{price}</strong>
            </Center>
          </VStack>
        </Link>
        <HStack
          style={{
            justifyContent: "space-between",
          }}
          className="mt-3"
        >
          <button
            className="btn btn-outline-danger"
            onClick={() => handleRemoveWishlist()}
          >
            Remove
          </button>
          <button
            className="btn btn-link"
            style={{
              color: "white",
              backgroundColor: "#333333",
              textDecoration: "none",
              borderRadius: "0em",
            }}
          >
            Move to Cart
          </button>
        </HStack>
      </div>
    </div>
  );
};

export default WishListCard;
