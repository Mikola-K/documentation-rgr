import { ChangeEvent, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import IElection from './interfaces/electionDto'
import axios from "axios";
import store from "./store/store";

function AdminMainPage() {
  const [electionList, setElectionList] = useState<IElection[]>([]);
  const { accessToken } = store.getState();
  const { idPerson } = store.getState();
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

   
  const { isAdmin } = store.getState();
  const test = () => {
    console.log(isAdmin, "accessToken");
  };
  return (
    <div className="">
      <Navbar indentity_code={idPerson} persone={"admin"} />
      <div className="flex justify-evenly h-screen bg-[#F7F7F7] p-4 m-2">
        <div className="">
          <div className="flex justify-center items-center">
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              All
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Active
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Closed
            </button>
            <button
              className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              onClick={(e) => {
                e.preventDefault();
                test();
              }}
            >
              Test
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
                            e.preventDefault();
                          }}
                          className="px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                        >
                          <Link to={`/user/election/${election.id}`}>
                            Detail
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              : "Loading"}
          </div>
        </div>
        <div className="h-2/4 flex justify-center items-center">
          <div className="flex flex-col">
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/admin/create`}>Create Election</Link>
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border  hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/admin/edit`}>Edit Election</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminMainPage;
