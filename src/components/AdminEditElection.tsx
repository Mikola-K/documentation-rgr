import React from "react";
import { Link } from "react-router-dom";

function AdminEditElection() {
  return (
    <div className="">
      <nav className="flex justify-center my-4">
        <h1 className="text-3xl font-bold underline text-red-600">Navbar Edit Election $ElectioName</h1>
      </nav>
      <div className="bg-[#F7F7F7]">
        <div>
          <h1>List of Election that you can change!</h1>
        </div>
        <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to={`/admin/main`}>Go Back</Link>
        </button>
      </div>
    </div>
  );
}

export default AdminEditElection;
