import axios from "axios";
import { useState } from "react";
import displayDate from "./displayDate";
import { Link } from "react-router-dom";

export default function GithubProfileFinder() {
  const [user, setUser] = useState("AhmedEkramy24");

  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);

  async function fetchUserData() {
    setIsSubmit(true);
    try {
      let { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(data);
      setError(null);
    } catch (error) {
      setError("User not found");
      setUserData(null);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <>
      <div className="container p-2">
        <h1 className="text-2xl text-center my-3">Github Profile Finder</h1>
        <div className="flex justify-center my-3">
          <input
            type="text"
            placeholder="Enter Github Username"
            className="border border-gray-300 px-3 py-1 rounded w-50"
            onChange={(e) => setUser(e.target.value)}
            value={user}
          />
          {isSubmit ? (
            <button className="bg-gray-800 text-white px-3 py-1 rounded ml-2">
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              onClick={fetchUserData}
              className="bg-gray-800 text-white px-3 py-1 rounded ml-2"
            >
              Search
            </button>
          )}
        </div>
        <div className="mt-4 border border-gray-300 p-4 rounded md:w-1/2 mx-auto">
          {error && (
            <p className="text-red-500 text-center font-semibold">{error}</p>
          )}
          {userData && (
            <>
              <div className="img size-[150px] rounded-full overflow-hidden bg-amber-100 mx-auto">
                <img
                  src={userData.avatar_url}
                  className="w-full object-cover"
                  alt={userData.login}
                />
              </div>
              <div className="info mt-3 relative">
                <p>
                  <span className="font-bold">Name : </span>
                  <a href={userData.html_url} target="_blank">
                    <span className="text-blue-500 underline font-semibold">
                      {userData.name}
                    </span>
                  </a>
                </p>
                <p>
                  <span className="font-bold">Joined At : </span>
                  <span className="font-semibold">
                    {displayDate(userData.created_at)}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Public Repositories: </span>
                  <span className="font-semibold text-blue-500">
                    {userData.public_repos}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Followers: </span>
                  <span className="font-semibold text-blue-500">
                    {userData.followers}
                  </span>
                </p>
                <p>
                  <span className="font-bold">Following: </span>
                  <span className="font-semibold text-blue-500">
                    {userData.following}
                  </span>
                </p>
                <Link
                  to={`/repositories/${userData.login}`}
                  className="absolute bottom-1 right-1"
                >
                  <button className="bg-gray-800 text-white px-3 py-1 rounded ">
                    Show Repos
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
