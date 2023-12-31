import { ChangeEvent, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { setAccessToken, setIdPerson, setIsAdmin } from "../store/store";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import store from "../store/store";

function Login() {
  const dispatch = useDispatch();
  const [createLogin, setCreateLogin] = useState({
    identityCode: "",
    password: "",
  });

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setCreateLogin({
      ...createLogin,
      [name]: value,
    });
  }
  const navigate = useNavigate();
  const CreateLoginButton = () => {
    axios
      .post("http://localhost:8082/signin", {
        identityCode: createLogin.identityCode,
        password: createLogin.password,
      })
      .then(function (response) {
        console.log("signin", response);
        dispatch(setIsAdmin(response.data.isAdmin))
        dispatch(setIdPerson(response.data.id));
        if (dispatch(setAccessToken(response.data.jwt))) {
          if (response.data.isAdmin === true) {
            navigate("/admin/main");
          } else {
            navigate("/user");
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="">
      <Navbar />
      <div className=" h-full bg-[#F7F7F7]">
        <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          <Link to={`/`}>Go back</Link>
        </button>
        <div className="flex items-center flex-col">
          <h1 className="py-2">Login</h1>
          <form>
            <div className="flex flex-col justify-center py-2 items-center">
              <label className="flex flex-col">
                Identity code:
                <input
                  name="identityCode"
                  onChange={handleInputChange}
                  value={createLogin.identityCode}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <label className="flex flex-col mt-2">
                Password:
                <input
                  name="password"
                  onChange={handleInputChange}
                  value={createLogin.password}
                  type="text"
                  className="w-64 my-0.5 bg-[#fffff] rounded-lg px-2 border border-slate-950 hover:border-purple-800"
                />
              </label>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  CreateLoginButton();
                }}
                className=" px-4 py-1 mt-4 my-2 mx-2 text-sx text-center  bg-black text-white font-semibold rounded-full border border-red-600 hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
