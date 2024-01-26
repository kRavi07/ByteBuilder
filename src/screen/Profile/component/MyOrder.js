import React from "react";
import { Row, Col, Card, Image } from "react-bootstrap";
import { Center, HStack } from "../../../component/BootstrapStack";
import LazyLoad from "react-lazyload";
import CardPlaceholder from "../../../component/CardPlaceholder";
import OrderCard from "./OrderCard";
import { useParams, useLocation } from "react-router-dom";
import SingleOrder from "./SingleOrder";
const MyOrder = () => {
  const orders = [
    {
      id: 1,
      name: "Intel Core i9-11900K Processor",
      image: "https://dummyimage.com/300x300/000/fff&text=Intel+Core+i9-11900K",
      status: "Processing",
    },
    {
      id: 2,
      name: "ASUS ROG Strix GeForce RTX 3080 Graphics Card",
      image:
        "https://dummyimage.com/300x300/000/fff&text=ASUS+ROG+Strix+GeForce+RTX+3080",
      status: "Shipped",
    },
    {
      id: 3,
      name: "Corsair Vengeance RGB Pro 32GB (2 x 16GB) DDR4 RAM",
      image:
        "https://dummyimage.com/300x300/000/fff&text=Corsair+Vengeance+RGB+Pro+32GB+DDR4",
      status: "Delivered",
    },
    {
      id: 4,
      name: "Samsung 970 EVO Plus 2TB NVMe SSD",
      image:
        "https://dummyimage.com/300x300/000/fff&text=Samsung+970+EVO+Plus+2TB+NVMe+SSD",
      status: "Cancelled",
    },
    {
      id: 5,
      name: "MSI MPG B550 GAMING EDGE WIFI Motherboard",
      image:
        "https://dummyimage.com/300x300/000/fff&text=MSI+MPG+B550+GAMING+EDGE+WIFI",
      status: "Processing",
    },
  ];

  const { id } = useParams();
  const location = useLocation();

  //if location is order/:id then show order details
  //else show all orders
  console.log(id);

  if (id) {
    return <SingleOrder />;
  }

  return (
    <Row className="gx-0" bg="primary">
      {orders.map((product) => (
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
            <OrderCard data={product} />
          </LazyLoad>
        </Col>
      ))}
    </Row>
  );
};

export default MyOrder;
