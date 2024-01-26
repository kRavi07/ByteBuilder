import React from "react";
import PropTypes from "prop-types";
import { Spinner, Placeholder } from "react-bootstrap";

const HStack = ({ children, className, ...rest }) => (
  <div className={`d-flex flex-row ${className || ""}`} {...rest}>
    {children}
  </div>
);

HStack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const VStack = ({ children, className, ...rest }) => (
  <div className={`d-flex flex-column ${className || ""}`} {...rest}>
    {children}
  </div>
);

VStack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Stack = ({ direction, children, className, ...rest }) => (
  <div
    className={`d-flex ${
      direction === "vertical" ? "flex-column" : "flex-row"
    } ${className || ""}`}
    {...rest}
  >
    {children}
  </div>
);

Stack.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
};

Stack.defaultProps = {
  direction: "horizontal",
};

const Box = ({ children, className, ...rest }) => (
  <div className={`${className || ""}`} {...rest}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Center = ({ children, className, ...rest }) => (
  <div
    className={`d-flex justify-content-center align-items-center ${
      className || ""
    }`}
    {...rest}
  >
    {children}
  </div>
);

Center.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Flex = ({
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  children,
  className,
}) => (
  <div
    className={`d-flex ${className}`}
    style={{
      flexDirection: direction,
      flexWrap: wrap,
      justifyContent,
      alignItems,
      alignContent,
    }}
  >
    {children}
  </div>
);

Flex.propTypes = {
  direction: PropTypes.oneOf([
    "row",
    "row-reverse",
    "column",
    "column-reverse",
  ]),
  wrap: PropTypes.oneOf(["nowrap", "wrap", "wrap-reverse"]),
  justifyContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
  ]),
  alignItems: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "baseline",
    "stretch",
  ]),
  alignContent: PropTypes.oneOf([
    "start",
    "end",
    "center",
    "between",
    "around",
    "stretch",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};

Flex.defaultProps = {
  direction: "row",
  wrap: "nowrap",
  justifyContent: "start",
  alignItems: "stretch",
  alignContent: "stretch",
  className: "",
};

export { HStack, VStack, Stack, Box, Center, Flex };
