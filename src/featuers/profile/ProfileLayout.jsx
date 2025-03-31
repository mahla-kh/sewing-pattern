import React from "react";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

function ProfileLayout() {
  return (
    <div className="flex mx-20">
      <ProfileSidebar />

      <main className="flex-1 mt-6 mr-6 h-full border-1 border-gray-300 rounded-lg overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
