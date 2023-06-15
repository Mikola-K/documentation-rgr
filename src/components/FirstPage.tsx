import { Link } from "react-router-dom";
import image from './items/2650149 1.svg'

function FirstPage () {
    return (
      <div className="">
        <nav className="flex justify-between my-4 mx-12 items-center bg-[#fffff]">
          <h1 className="text-4xl text-black-600">Wonderland elections</h1>
          <div className="">
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/register`}>Register</Link>
            </button>
            <button className="px-4 py-1 my-2 mx-2 text-sx bg-black text-white border-red-600 font-semibold rounded-full border   hover:text-[#27272a] hover:bg-[#cbd5e1] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              <Link to={`/login`}>Login</Link>
            </button>
          </div>
        </nav>
        <div className="flex justify-center">
          <h1 className="text-6xl text-black-600">
            Government cares about you!
          </h1>
        </div>
        <div className="flex justify-center items-center h-screen">
          <img src={image} alt="Image" className="w-3/4 h-3/4 items-center" />
        </div>
      </div>
    );
};

export default FirstPage;