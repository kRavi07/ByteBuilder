import React from "react";
import PropTypes from "prop-types";

const Divider = ({ color, className, thickness }) => {
  const dividerStyle = {
    borderBottom: `${thickness}px solid ${color}`,
    width: "100%",
    display: "block",
  };

  return (
    <div
      className={className ? ` ${className}` : "divider"}
      style={dividerStyle}
    ></div>
  );
};

Divider.propTypes = {
  color: PropTypes.string.isRequired,
  thickness: PropTypes.number.isRequired,
};

Divider.defaultProps = {
  color: "#000",
  thickness: 1,
};

export default Divider;
