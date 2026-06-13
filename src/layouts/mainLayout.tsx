

import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Side";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen w-screen bg-gray-50">

      {/* Sidebar fixe
      <aside className="w-72 shrink-0">
        <Sidebar />
      </aside> */}

      {/* contenu principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>

    </div>
  );
}