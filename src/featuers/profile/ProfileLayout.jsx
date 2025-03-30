import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

function ProfileLayout() {
  return (
    <div className="flex bg-yellow-50">
      <ProfileSidebar />

      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
