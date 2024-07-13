import { Link } from "react-router-dom";
import img from "../assets/logo1.png";
import { useSelector } from "react-redux"; // used to get

export default function Navbar() {
  /* we are subscribing to cart state
  any change in cart state, we will get updated data */
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: "0",
        background: "white",
        padding: "20px",
      }}
    >
      <span className="logo">
        <img
          style={{
            width: "200px",
            height: "50px",
          }}
          src={img}
          alt=""
        />
      </span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items: {items.length}</span>
      </div>
    </div>
  );
}
