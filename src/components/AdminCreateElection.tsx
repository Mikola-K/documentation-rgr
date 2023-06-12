import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AdminCreateElection() {
  const [createElection, setCreateElection] = useState({
    name: "",
    description: "",
    available_votes: 0,
    state: "",
    district: "",
    city: "",
    voting_address: "",
    minimum_age: 0,
    maximum_age: 0,
    start_date: "",
    end_date: "",
    candidates_name: "",
    candidates_description: "",
  });
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreateElection({
      ...createElection,
      [name]: value,
    });
  }
  const CreateElectionButton = () => {};
  return (
    <div className="">
      <nav className="flex justify-center my-4">
        <h1 className="text-3xl font-bold underline text-red-600">
          Navbar Create Election
        </h1>
      </nav>
      <div className=" h-full bg-[#F7F7F7]">
        <div className="flex items-center flex-col">
          <h1 className="py-2">Create Election</h1>
          <form>
            <div className="flex flex-col justify-center py-2">
              <label className="flex flex-col">
                Name:
                <input
                  name="name"
                  onChange={handleInputChange}
                  value={createElection.name}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Description:
                <input
                  name="description"
                  onChange={handleInputChange}
                  value={createElection.description}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Available votes:
                <input
                  name="available_votes"
                  onChange={handleInputChange}
                  value={createElection.available_votes}
                  type="number"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <div className="flex flex-col mt-2">
                Choose locality:
                <div className="">
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    District
                  </button>
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    City
                  </button>
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    State
                  </button>
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    National
                  </button>
                </div>
              </div>
              <label className="flex flex-col mt-2">
                Vote retraction:
                <div className="">
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Enable
                  </button>
                  <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Disable
                  </button>
                </div>
              </label>
              <label className="flex flex-col mt-2">
                State:
                <input
                  name="state"
                  onChange={handleInputChange}
                  value={createElection.state}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                District:
                <input
                  name="district"
                  onChange={handleInputChange}
                  value={createElection.district}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                City:
                <input
                  name="city"
                  onChange={handleInputChange}
                  value={createElection.city}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Voting address:
                <input
                  name="voting_address"
                  onChange={handleInputChange}
                  value={createElection.voting_address}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Minimum age:
                <input
                  name="minimum_age"
                  onChange={handleInputChange}
                  value={createElection.minimum_age}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Maximum age:
                <input
                  name="maximum_age"
                  onChange={handleInputChange}
                  value={createElection.maximum_age}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Start date:
                <input
                  name="start_date"
                  onChange={handleInputChange}
                  value={createElection.start_date}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                End date:
                <input
                  name="end_date"
                  onChange={handleInputChange}
                  value={createElection.end_date}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Candidates name:
                <input
                  name="candidates_name"
                  onChange={handleInputChange}
                  value={createElection.candidates_name}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Candidates description:
                <input
                  name="candidates_description"
                  onChange={handleInputChange}
                  value={createElection.candidates_description}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <button
                onClick={CreateElectionButton}
                className=" px-4 py-1 mt-4 my-2 mx-2 text-sx text-center text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
        <div>
          <button className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            <Link to={`/admin/main`}>Go Back</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateElection;
