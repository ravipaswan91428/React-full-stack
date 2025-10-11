import { useEffect, useState } from "react";
import { Outlet,useNavigate,useLocation } from "react-router-dom";

export default function Github() {
  const[data, setData] = useState([])
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

    useEffect(()=>{
        fetch('https://api.github.com/users/ravipaswan91428')
        .then(response => response.json())
        .then(data=> {
            console.log(data);
            setData(data)
        })
    },[])

    const handleSearch = () => {
    if (username.trim() !== "") {
      navigate(`/github/${username.trim()}`);
    }
    }

    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl py-32">
      <div className="flex justify-between">
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl text-gray-900 font-bold">
            <b>Ravi's</b> Github Repository
          </h2>
          <p className="mt-4 text-gray-600">
            Explore the source code and contribute to the project on Github.
          </p>
          <div className="mt-4">
            <span className="font-medium">Followers:</span>{" "}
            <span className="text-gray-600">{data.followers}</span>
          </div>
          <a
            href="https://github.com/ravipaswan91428"
            className="mt-4 inline-block bg-orange-700 text-white font-medium rounded-lg px-4 py-2 hover:bg-orange-800"
          >
            View on Github
          </a>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <img
            className="rounded-lg overflow-hidden w-48 border-2 border-slate-200"
            src={
              data.avatar_url ||
              "https://avatars.githubusercontent.com/u/104523634?v=4"
            }
            alt="GitHub Profile"
          />
        </div>
      </div>
      <div className="flex justify-start items-center py-16">
        <div className="flex justify-between items-center w-full max-w-md bg-gray-50 focus:border-orange-500 focus:outline-none border border-gray-300 rounded-lg">
          <input
            type="text"
            id="searchUserName"
            placeholder="Github UserName"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="w-full py-3 px-4 rounded-l-lg text-gray-800 font-semibold outline-none border-none"
          />
          <button
            onClick={handleSearch}
            className="inline-block bg-orange-700 text-white font-medium rounded-lg px-4 mr-1 py-2 hover:bg-orange-800 h-full border-none outline-none"
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Outlet key={location.pathname} />
      </div>
    </div>
  );
}
