import React, { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import CardPlaceholder from "../../../component/CardPlaceholder";
import { useParams, useLocation } from "react-router-dom";
import SingleOrder from "./SingleOrder";
import WishListCard from "./WishListCard";
import { useGetWishlistQuery } from "../../../state/api";

const MyWishList = () => {
  const { data, isLoading, isSuccess, refetch } = useGetWishlistQuery();

  const [wishlist, setWishList] = useState([]);

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setWishList([...data?.wishlist.wishlist.items]);
    }
  }, []);

  return (
    <Row className="gx-0" bg="primary">
      {isLoading && !isSuccess ? (
        <Col className="text-center">
          <Spinner />
        </Col>
      ) : (
        <>
          {wishlist.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <LazyLoad
                height={200}
                key={product.id}
                offset={[-200, 0]}
                debounce={100}
                placeholder={
                  <div className="mx-2 my-2">
                    <CardPlaceholder />
                  </div>
                }
              >
                <WishListCard data={product} />
              </LazyLoad>
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};

export default MyWishList;
