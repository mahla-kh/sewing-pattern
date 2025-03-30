import React from "react";
import { Link } from "react-router-dom";
function ProfileSidebar() {
  return (
    <div
      className="w-64 flex flex-col mt-5 rounded-lg border-1 border-gray-300
      bg-white shadow-md p-5"
    >
      <h2 className="text-xl font-bold text-gray-700 mb-5">داشبورد</h2>
      <nav>
        <ul className=" divide-y-[1px] divide-gray-300">
          <li className="py-3 flex items-center space-x-2">
            <Link
              to="/profile"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
            >
              {/* // Home */}
              <span>پروفایل</span>
            </Link>
          </li>
          <li className="py-3 flex items-center space-x-2">
            <Link
              to="/profile/wish-list"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition"
            >
              {/* //Heart */}
              <span>لیست علاقه‌مندی‌ها</span>
            </Link>
          </li>
          <li>
            <button className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition w-full">
              {/* LOg out */}
              <span>خروج</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ProfileSidebar;
