import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import IElection from "../interfaces/electionDto";
import store from "../store/store";

interface Props {
  id: string;
}
function AdminEditElection(props: Props) {
  const [electionList, setElectionList] = useState<IElection>();
  const { idPerson } = store.getState();
  // useEffect(() => {
  //   axiosInstance.get<IElection>(`/election/editable`).then((response) => {
  //     setElectionList(response.data);
  //     console.log(response.data, "list of election");
  //   });
  // });

  //  useEffect(() => {
  //   axiosInstance.get<IElection>(`/election/editable`).then((response) => {
  //     setElectionList(response.data);
  //     console.log(response.data, "list of election");
  //   });
  //   });

  return (
    <div className="">
      <Navbar indentity_code={idPerson} persone={"admin"} />
      <div className="bg-[#F7F7F7]">
        <div>
          <h1>List of Election that you can change!</h1>
          <h1>Election One</h1>
          <h1>Election Two</h1>
          {electionList?.name}
          {/* {electionList.length > 0
            ? electionList.map((election: IElection, index: number) => (
                <div
                  key={election.id + "-" + index}
                  className="w-64 bg-[#bfd2e8] m-2 top-10 p-6 shadow-xl text-justify shadow-zinc-800 rounded-lg border border-[#869cdb]"
                >
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">Name</label>
                    <h1 className="italic hover:not-italic">{election.name}</h1>
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
                      <button className="px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        <Link to={`/admin/edit/${election.id}`}>Edit</Link>
                      </button>
                      <button
                        onClick={() => {
                          deleteElection(election.id);
                        }}
                        className="px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : "Loading"} */}
        </div>
        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to={`/admin/main`}>Go Back</Link>
        </button>
      </div>
    </div>
  );
}

function AdminEditElectionWrapper() {
  const { id } = useParams<{
    id?: string;
  }>();
  if (!id) {
    return <div>Invalid Id</div>;
  }
  return <AdminEditElection id={id} />;
}

export default AdminEditElectionWrapper;

