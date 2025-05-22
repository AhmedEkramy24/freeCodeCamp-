import axios from "axios";
import { useEffect, useState } from "react";

export default function SearchInUsers() {
  const [users, setUsers] = useState(null);
  const [search, setSearch] = useState("");

  async function getUsers() {
    let { data } = await axios.get("https://dummyjson.com/users");
    setUsers(data.users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-3xl text-center my-3">Search in users</h1>
        <div className="form text-center">
          <input
            type="text"
            className="border w-60  border-slate-300 px-3 py-1.5 focus:outline-none rounded-md"
            placeholder="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        {search.length > 0 && (
          <div className="users">
            {users &&
              users
                .filter((user) =>
                  user.firstName.toLowerCase().startsWith(search.toLowerCase())
                )
                .map((user, index) => (
                  <div key={index} className="user my-2 ">
                    <p className="text-xl w-fit mx-auto cursor-pointer hover:text-blue-500" onClick={()=>setSearch(user.firstName + " " + user.lastName)}>
                      {user.firstName} {user.lastName}
                    </p>
                  </div>
                ))}
          </div>
        )}
      </div>
    </>
  );
}
