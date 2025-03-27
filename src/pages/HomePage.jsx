import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <div className="flex flex-col bg-white p-5 gap-4 w-[70%] mx-auto shadow-2xl rounded-lg border-2 border-gray-100">
        <div className="flex flex-row gap-4">
          <Link to="/women">
            <img alt="women" className="rounded-md " src="/imges/2.jpg" />
          </Link>
          <Link to="/men">
            <img alt="men" className="rounded-md " src="/imges/4.jpg" />
          </Link>
        </div>
        <div className="flex flex-row gap-4">
          <Link to="/children">
            <img alt="children" className="rounded-md " src="/imges/5.jpg" />
          </Link>
          <Link to="/fantasy">
            <img alt="fantasy" className="rounded-md " src="/imges/3.jpg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
