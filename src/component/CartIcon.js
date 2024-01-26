import { FiShoppingCart } from "react-icons/fi";
import { Badge } from "react-bootstrap";

const CartIcon = ({ quantity }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <FiShoppingCart />
      {quantity > 0 && (
        <Badge
          bg="danger"
          style={{
            position: "absolute",

            top: "1px",
            right: "-10px",
            fontSize: "10px",
            borderRadius: "50%",
            padding: "2px 5px",
          }}
        >
          {quantity}
        </Badge>
      )}
    </div>
  );
};

export default CartIcon;
