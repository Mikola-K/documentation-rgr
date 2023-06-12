import React from "react";
import { Link } from "react-router-dom";

function AdminMainPage() {
  return (
    <div className="">
      <nav className="flex justify-center my-4">
        <h1 className="text-3xl font-bold underline text-red-600">Navbar</h1>
      </nav>
      <div className="flex justify-evenly h-screen bg-[#F7F7F7] p-4 m-2">
        <div className="">
          <div>
            <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              All
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Active
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Closed
            </button>
          </div>
          <div className="flex items-center flex-col p-2">
            <h1>Election One</h1>
            <h1>Election Two</h1>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/admin/create`}>Create Election</Link>
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/admin/edit`}>Edit Election</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMainPage;
