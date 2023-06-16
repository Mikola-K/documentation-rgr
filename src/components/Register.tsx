import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Datepicker from "react-tailwindcss-datepicker";
import axiosInstance from "../api/axiosInstance";
import axios from "axios";

function Register() {
  const [dateValue, setDateValue] = useState({
    birthDate: null,
  });
  const [sexValue, setSexValue] = useState(0);
  const [createUser, setCreateUser] = useState({
    identity_code: "",
    password: "",
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    state: "",
    district: "",
    city: "",
    home_address: "",
    postal_code: "",
  });
  //http://localhost:8081
  const CreateUserButton = () => {
    axiosInstance
      .post(`/signup`, {
        address: {
          city: createUser.city,
          district: createUser.district,
          homeAddress: createUser.home_address,
          postalCode: createUser.postal_code,
          state: createUser.state,
        },
        birthDate: "2000-06-15",
        email: createUser.email_address,
        firstName: createUser.first_name,
        identityCode: createUser.identity_code,
        password: createUser.password,
        phoneNumber: createUser.phone_number,
        secondName: createUser.last_name,
        sex: sexValue,
      })
      .then(function (response) {
        console.log("created new user", response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreateUser({
      ...createUser,
      [name]: value,
    });
  }
  const handleDateValueChange = (date: any) => {
    setDateValue(date);
  };

  return (
    <div className="">
      <Navbar />
      <div className=" h-full bg-[#F7F7F7]">
        <div>
          <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            <Link to={`/`}>Go Back</Link>
          </button>
        </div>
        <div className="flex items-center flex-col">
          <h1 className="py-2">Register</h1>
          <form>
            <div className="flex flex-col justify-center py-2 items-center">
              <label className="flex flex-col">
                Identity code:
                <input
                  name="identity_code"
                  onChange={handleInputChange}
                  value={createUser.identity_code}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Create password:
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={createUser.password}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                First name:
                <input
                  name="first_name"
                  onChange={handleInputChange}
                  value={createUser.first_name}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Last name:
                <input
                  name="last_name"
                  onChange={handleInputChange}
                  value={createUser.last_name}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Email address:
                <input
                  name="email_address"
                  onChange={handleInputChange}
                  value={createUser.email_address}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Phone Number:
                <input
                  name="phone_number"
                  onChange={handleInputChange}
                  value={createUser.phone_number}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>

              <label className="flex flex-col mt-2">
                State:
                <input
                  name="state"
                  onChange={handleInputChange}
                  value={createUser.state}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                City:
                <input
                  name="city"
                  onChange={handleInputChange}
                  value={createUser.city}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                District:
                <input
                  name="district"
                  onChange={handleInputChange}
                  value={createUser.district}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Home address:
                <input
                  name="home_address"
                  onChange={handleInputChange}
                  value={createUser.home_address}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Postal code:
                <input
                  name="postal_code"
                  onChange={handleInputChange}
                  value={createUser.postal_code}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2 w-full">
                Sex:
                <div className="flex justify-around">
                  <button
                    className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setSexValue(0);
                    }}
                  >
                    Woman
                  </button>
                  <button
                    className="px-4 py-1 my-2 mx-2 text-sx text-[#fffff] font-semibold rounded-full border border-purple-200 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setSexValue(1);
                    }}
                  >
                    Man
                  </button>
                </div>
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  CreateUserButton()
                }}
                className=" px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Register
              </button>
              <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                <Link to={`/login`}>Go to Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
