import React from "react";
import { Steps, Popover } from "antd";
import { CiCircleCheck } from "react-icons/ci";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiLoaderCircle } from "react-icons/bi";
import "./stepbar.css";
const Stepbar = () => {
  const customDot = (dot, { description }) => (
    <Popover content={<span>{description}</span>}>{dot}</Popover>
  );
  return (
    <div className="stepbar">
      <Steps
        className="text-light"
        current={2}
        progressDot={customDot}
        items={[
          {
            title: "Order Placed",
            status: "finish",
            description: "Order placed on 12th Jan 2021",
          },
          {
            title: "Order Confirmed",
            status: "finish",
            description: "Order confirmed on 12th Jan 2021",
          },
          {
            title: "Order Shipped",
            status: "process",
            description: "Order shipped on 12th Jan 2021",
          },
          {
            title: "Order Delivered",
            status: "wait",
            description: "Order delivered on 12th Jan 2021",
          },
        ]}
      />
    </div>
  );
};

export default Stepbar;
