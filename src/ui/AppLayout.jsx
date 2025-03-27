import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="bg-blue-100 pb-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
