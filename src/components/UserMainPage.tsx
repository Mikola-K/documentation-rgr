import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import IElection from "../interfaces/electionDto";
import store from "../store/store";
import axios from "axios";
import { Link } from "react-router-dom";

function UserMainPage() {
  const [electionList, setElectionList] = useState<IElection[]>([]);
  const { accessToken } = store.getState();
    const { idPerson } = store.getState();
    const { isAdmin } = store.getState();

 useEffect(() => {
   axios
     .get<IElection[]>(`http://localhost:8081/election`, {
       headers: {
         Authorization: accessToken,
       },
     })
     .then((response) => {
       setElectionList(response.data);
       console.log(response.data, "Election List");
     });
 }, [accessToken]);


  return (
    <div className="">
      <Navbar indentity_code={idPerson} persone={isAdmin ? "admin" : "user" } />
      <div className=" h-screen bg-[#F7F7F7] p-4 m-2">
        <div>
          <div className="flex items-center justify-center">
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
          <div className="flex flex-row p-2 mx-2 justify-evenly">
            {electionList.length > 0
              ? electionList.map((election: IElection, index: number) => (
                  <div
                    key={election.id + "-" + index}
                    className="w-64 bg-[#bfd2e8] m-2 top-10 p-6 shadow-xl text-justify shadow-zinc-800 rounded-lg border border-[#869cdb]"
                  >
                    <div className="flex flex-col mt-2">
                      <label className="text-[#19273f] font-bold">Name</label>
                      <h1 className="italic hover:not-italic">
                        {election.name}
                      </h1>
                    </div>
                    <div className="flex flex-col mt-2">
                      <label className="text-[#19273f] font-bold">
                        Description
                      </label>
                      <h1 className="italic hover:not-italic">
                        {election.description}
                      </h1>
                    </div>
                    <div className="flex justify-center mt-2">
                      <div>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                          }}
                          className="px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                        >
                          <Link to={`/user/election/${election.id}`}>Detail</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMainPage;
