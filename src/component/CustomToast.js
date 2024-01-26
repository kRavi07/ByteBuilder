import React, { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

const CustomToast = ({ message, bg, autoCloseDuration = 3000 }) => {
  const [show, setShow] = useState(true);

  const handleToastClose = () => {
    setShow(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, autoCloseDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [autoCloseDuration]);

  return (
    <div style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}>
      {show && (
        <Alert variant={bg} onClose={handleToastClose} dismissible>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default CustomToast;
