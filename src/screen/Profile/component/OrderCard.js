import { useState } from "react";
import { Center, HStack, VStack } from "../../../component/BootstrapStack";

import { Link, useNavigate } from "react-router-dom";

const OrderCard = ({ data }) => {
  const navigate = useNavigate();
  const [onMouseOver, setOnMouseOver] = useState(false);

  const onMouseOverHandler = () => {
    setOnMouseOver(true);
  };

  const onMouseOutHandler = () => {
    setOnMouseOver(false);
  };

  const { id, name, image, price, status } = data;

  return (
    <Link
      to={`order/${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        className="card m-2 pb-3"
        onMouseOver={onMouseOverHandler}
        onMouseOut={onMouseOutHandler}
        style={{
          backgroundColor: onMouseOver ? "#D93B34" : "white",
        }}
      >
        <div className="card-body">
          <Center>
            <img
              src={image}
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
                  color: onMouseOver ? "white" : "black",
                  height: "2em",
                }}
              >
                {name}
              </h6>
            </Center>

            <HStack
              style={{
                justifyContent: "space-between",
                textDecoration: "none",
              }}
            >
              <p
                className="card-text"
                style={{ color: onMouseOver ? "white" : "black" }}
              >
                Price: {price}
              </p>
              <p>{status}</p>
            </HStack>
          </VStack>
        </div>
      </div>
    </Link>
  );
};

export default OrderCard;
