import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import axiosInstance from "../api/axiosInstance";
import IElection from "../interfaces/electionDto";
import store from "../store/store";
import axios from "axios";

function UserMainPage() {
  const [electionList, setElectionList] = useState<IElection>();
  const { accessToken } = store.getState();

  //   useEffect(() => {
  //     axiosInstance.get<IElection>(`/election/editable`).then((response) => {
  //       setElectionList(response.data);
  //       console.log(response.data, "list of election");
  //     });
  //   });
  // async function testGet() {
  //   try {
  //     const response = await axiosInstance.get<IElection>(
  //       `/election/editable`
  //     );
  //     //setElectionList(response.data);
  //     console.log("all elections", response.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  async function testGet() {
    try {
      const response = await axios.get<IElection>(
        `http://localhost:8081/election`,
        {
          headers: {
            Authorization: accessToken,
            
          },
        }
      );
      //setElectionList(response.data);
      console.log("all elections", response.data);
    } catch (e) {
      console.log(e);
    }
  }
// "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//             "Access-Control-Allow-Headers":
//               "Content-Type, Authorization, X-Requested-With",
  const test = () => {
    console.log(accessToken, "accessToken");
  };
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
          <button
            className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              test();
            }}
          >
            Test
          </button>
          <button
            className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={(e) => {
              e.preventDefault();
              testGet();
            }}
          >
            Test get
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserMainPage;
