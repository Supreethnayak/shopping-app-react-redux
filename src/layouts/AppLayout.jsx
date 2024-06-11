import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Navbar />
        <main>
          {/* Outlet - to render routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
