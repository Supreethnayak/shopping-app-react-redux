import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      <div>
        <main>
          {/* Outlet - to render routes */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
