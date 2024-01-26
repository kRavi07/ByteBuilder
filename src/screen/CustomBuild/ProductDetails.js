import React from "react";
import { HStack, VStack } from "../../component/BootstrapStack";

const ProductDetails = ({ product }) => {
  return (
    <>
      <VStack
        style={{
          color: "white",
        }}
      >
        <h5>{product.description}</h5>
        <p>{product.name}</p>
        <p>
          4.5 <span className="text-warning">★</span> (1000)
        </p>
        <p className="text-danger">₹{product.price}</p>

        <ol className="text-left">
          <li>1.5 GHz octa-core processor</li>
          <li>4GB RAM</li>
          <li>64GB internal memory expandable up to 256GB</li>
          <li>13MP + 2MP + 2MP | 8MP Front Camera</li>
          <li>4000 mAh Battery</li>
          <li>
            Android v10.0 operating system with 2.3GHz Qualcomm Snapdragon 665
            octa core processor
          </li>
          <li>
            16.51 centimeters (6.53-inch) FHD+ capacitive touchscreen with 2340
            x 1080 pixels resolution, 395 ppi pixel density and 16M color
            support
          </li>
        </ol>
      </VStack>
    </>
  );
};

export default ProductDetails;
