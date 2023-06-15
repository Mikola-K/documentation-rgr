import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import IElection from "../interfaces/electionDto";
import axiosInstance from "../api/axiosInstance";
import { useParams } from "react-router-dom";

interface Props {
  id: string;
}

function AdminEditElectionById(props: Props) {
  const [electionListById, setElectionListById] = useState<IElection>();

  useEffect(() => {
    axiosInstance.get<IElection>(`/election/${props.id}`).then((response) => {
      setElectionListById(response.data);
      console.log(response.data, "list of election");
    });
  });

  return (
    <div className="">
      <Navbar indentity_code={31231} persone={"admin"} />
      <div className="bg-[#F7F7F7]">
        <div>
          <h1>List of Election that you can change!</h1>
          <h1>Election One</h1>
          <h1>Election Two</h1>
          {electionListById?.name}
        </div>
        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to={`/admin/edit`}>Go Back</Link>
        </button>
      </div>
    </div>
  );
}

function AdminEditElectionByIdWrapper() {
  const { id } = useParams<{
    id?: string;
  }>();
  if (!id) {
    return <div>Invalid Id</div>;
  }
  return <AdminEditElectionById id={id} />;
}

export default AdminEditElectionByIdWrapper;
