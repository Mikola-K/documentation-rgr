import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Datepicker from "react-tailwindcss-datepicker";
import axios from "axios";
import store from "../store/store";

function AdminCreateElection() {
  const navigate = useNavigate();
  const { accessToken } = store.getState();
  const { idPerson } = store.getState();
  const [dateValue, setDateValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [chooseLocalityValue, setChooseLocalityValue] = useState(0);
  const [voteRetractionValue, setVoteRetractionValue] = useState(false);
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
    candidates_name: "",
    candidates_description: "",
    candidates_name_two: "",
    candidates_description_two: ''
  });
  
  const CreateElectionButton = () => {
      axios
        .post(
          "http://localhost:8082/election",
          {
            name: createElection.name,
            adminId: idPerson,
            description: createElection.description,
            availableVotes: createElection.available_votes,
            localityType: chooseLocalityValue,
            localityAddress: {
              homeAddress: createElection.voting_address,
              city: createElection.city,
              district: createElection.district,
              state: createElection.state,
              postalCode: null,
            },
            hasRetract: voteRetractionValue,
            minAge: createElection.minimum_age,
            maxAge: createElection.maximum_age,
            startDate: dateValue.startDate,
            endDate: dateValue.endDate,
            candidateList: [
              {
                name: createElection.candidates_name,
                description: createElection.candidates_description,
              },
              {
                name: createElection.candidates_name_two,
                description: createElection.candidates_description_two,
              },
            ],
          },
          {
            headers: {
              Authorization: accessToken,
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            },
          }
        )
        .then(function (response) {
          console.log("created new election", response);
          navigate("/admin/main");
        })
        .catch(function (error) {
          console.log(error);
        });
  };
  
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreateElection({
      ...createElection,
      [name]: value,
    });
  }
  const handleDateValueChange = (date: any) => {
    setDateValue(date);
  };

  return (
    <div className="">
      <Navbar indentity_code={idPerson} persone={"admin"} />
      <div className=" h-full bg-[#F7F7F7]">
        <div>
          <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            <Link to={`/admin/main`}>Go Back</Link>
          </button>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="py-2">Create Election</h1>
          <form>
            <div className="flex flex-col justify-center py-2 items-center">
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
              <label className="flex flex-col mt-2 items-start w-full">
                Choose locality:
                <div className="flex justify-around flex-col">
                  <div className="flex w-full">
                    <button
                      className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setChooseLocalityValue(3);
                      }}
                    >
                      National
                    </button>
                    <button
                      className="px-4 py-1 my-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setChooseLocalityValue(2);
                      }}
                    >
                      State
                    </button>
                  </div>
                  <div className="flex justify-around">
                    <button
                      className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setChooseLocalityValue(1);
                      }}
                    >
                      City
                    </button>
                    <button
                      className="px-4 py-1 my-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                      onClick={(e) => {
                        e.preventDefault();
                        setChooseLocalityValue(0);
                      }}
                    >
                      District
                    </button>
                  </div>
                </div>
              </label>
              <label className="flex flex-col mt-2 w-full">
                Vote retraction:
                <div className="flex justify-around">
                  <button
                    className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setVoteRetractionValue(true);
                    }}
                  >
                    Enable
                  </button>
                  <button
                    className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setVoteRetractionValue(false);
                    }}
                  >
                    Disable
                  </button>
                </div>
              </label>
              {chooseLocalityValue !== 3 ? (
                <div>
                  {chooseLocalityValue === 2 ||
                  chooseLocalityValue === 1 ||
                  chooseLocalityValue === 0 ? (
                    <div>
                      <div>
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
                      </div>
                      {chooseLocalityValue === 1 ||
                      chooseLocalityValue === 0 ? (
                        <div>
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
                        </div>
                      ) : null}
                      {chooseLocalityValue === 0 ? (
                        <div>
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
                            Voting address:
                            <input
                              name="voting_address"
                              onChange={handleInputChange}
                              value={createElection.voting_address}
                              type="text"
                              className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                            />
                          </label>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
              <label className="flex flex-col mt-2">
                Minimum age:
                <input
                  name="minimum_age"
                  onChange={handleInputChange}
                  value={createElection.minimum_age}
                  type="number"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Maximum age:
                <input
                  name="maximum_age"
                  onChange={handleInputChange}
                  value={createElection.maximum_age}
                  type="number"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Start date / End date:
                <div className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800">
                  <Datepicker
                    primaryColor={"blue"}
                    value={dateValue}
                    onChange={handleDateValueChange}
                    showShortcuts={true}
                  />
                </div>
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
              <label className="flex flex-col mt-2">
                Candidates name two:
                <input
                  name="candidates_name_two"
                  onChange={handleInputChange}
                  value={createElection.candidates_name_two}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Candidates description two:
                <input
                  name="candidates_description_two"
                  onChange={handleInputChange}
                  value={createElection.candidates_description_two}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  CreateElectionButton();
                }}
                className=" px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateElection;
