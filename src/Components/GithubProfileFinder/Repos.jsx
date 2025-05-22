import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import html from "../../assets/html.jpg";
import css from "../../assets/css.jpg";
import js from "../../assets/js.jpg";
import code from "../../assets/code.png";

export default function Repos() {
  const [repos, setRepos] = useState([]);
  const { username } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchRepos() {
    let { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    setRepos(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-2xl text-center my-3">
          Github Repositories of{" "}
          <span className="text-gray-800 font-bold">{username}</span>
        </h1>

        <div className="repos">
          {isLoading ? (
            <Loading />
          ) : (
            <div>
              {repos.map((repo, index) => (
                <div key={index}>
                  <div className="border border-gray-300 p-4 rounded my-2 flex items-center justify-between" >
                    <div className="info">
                      <h2 className="text-xl font-bold">{repo.name}</h2>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        className="text-blue-500 underline"
                      >
                        View Repository
                      </a>
                    </div>
                    <span className="most-lan">
                      <img
                        src={
                          repo.language === "JavaScript"
                            ? js
                            : repo.language === "CSS"
                            ? css
                            : repo.language === "HTML"
                            ? html
                            : code
                        }
                        className="w-10"
                        alt={repo.language}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
