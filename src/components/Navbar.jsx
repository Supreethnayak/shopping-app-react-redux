import { Link } from "react-router-dom";
import img from "../assets/logo1.png";

export default function Navbar() {
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
            width: "40px",
            height: "40px",
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
        <span className="cartCount">Cart items: {1}</span>
      </div>
    </div>
  );
}
