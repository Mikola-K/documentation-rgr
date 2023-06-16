import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import IElection from "../interfaces/electionDto";
import { useParams } from "react-router-dom";
import store from "../store/store";
import axios from "axios";

interface Props {
  id: string;
}

function AdminEditElectionById(props: Props) {
  const [electionListById, setElectionListById] = useState<IElection>();
  const { idPerson } = store.getState();
  const { accessToken } = store.getState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get<IElection>(`http://localhost:8082/election/${props.id}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((response) => {
        setElectionListById(response.data);
        console.log(response.data, "Election by id");
      });
  }, [props.id, accessToken]);

  const deleteElectionButton = (id: number) => {
    axios
      .delete(`http://localhost:8082/election/${id}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then(function (response) {
        console.log("deleted", response);
        navigate("/admin/edit");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Navbar indentity_code={idPerson} persone={"admin"} />
      <div className="bg-[#F7F7F7]">
        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to={`/admin/edit`}>Go Back</Link>
        </button>
        <div className="flex flex-row p-2 mx-2 justify-center">
          {electionListById ? (
            <div className="w-64 bg-[#bfd2e8] m-2 top-10 p-6 shadow-xl text-justify shadow-zinc-800 rounded-lg border border-[#869cdb]">
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">Name</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.name}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">Description</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.description}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">Start Date</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.startDate.toString()}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">End Date</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.endDate.toString()}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">hasRetract</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.hasRetract.toString()}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">MaxAge</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.maxAge}
                </h1>
              </div>
              <div className="flex flex-col mt-2">
                <label className="text-[#19273f] font-bold">MaxAge</label>
                <h1 className="italic hover:not-italic">
                  {electionListById.minAge}
                </h1>
              </div>
              {electionListById.localityAddress.city !== "" ? (
                <div>
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">City</label>
                    <h1 className="italic hover:not-italic">
                      {electionListById.localityAddress.city}
                    </h1>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">District</label>
                    <h1 className="italic hover:not-italic">
                      {electionListById.localityAddress.district}
                    </h1>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">
                      Home address
                    </label>
                    <h1 className="italic hover:not-italic">
                      {electionListById.localityAddress.homeAddress}
                    </h1>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">State</label>
                    <h1 className="italic hover:not-italic">
                      {electionListById.localityAddress.state}
                    </h1>
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="text-[#19273f] font-bold">
                      Postal code
                    </label>
                    <h1 className="italic hover:not-italic">
                      {electionListById.localityAddress.postalCode}
                    </h1>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col mt-2">
                  <label className="text-[#19273f] font-bold">
                    No locality Address
                  </label>
                </div>
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  deleteElectionButton(electionListById.id);
                }}
                className=" px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Delete
              </button>
            </div>
          ) : (
            "Loading"
          )}
        </div>
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
