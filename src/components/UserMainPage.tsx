import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function UserMainPage() {
    return (
        <div className="">
            <Navbar indentity_code={31231} persone={"user"} />
            <div className="flex justify-evenly h-screen bg-[#F7F7F7] p-4 m-2">
                <div className="">
                    <div>
                        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            All
                        </button>
                        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Active
                        </button>
                        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Closed
                        </button>
                    </div>
                    <div className="flex items-center flex-col p-2">
                        <h1>Election One</h1>
                        <h1>Election Two</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserMainPage;
