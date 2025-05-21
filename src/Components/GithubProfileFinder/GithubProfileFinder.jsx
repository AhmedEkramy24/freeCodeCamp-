export default function GithubProfileFinder() {
  const [user, setUser] = useState("AhmedEkramy24");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});

  async function fetchUserData() {
    try {
      let { data } = await axios.get(`https://api.github.com/users/${user}`);
      setUserData(data);
      console.log(data);
    } catch (error) {}
  }

  useEffect(() => {
    fetchUserData();
  }, [user]);
 
  return (
    <>
      <div className="container p-2">
        <h1 className="text-2xl text-center my-3">Github Profile Finder</h1>
        <div className="flex justify-center my-3">
          <input
            type="text"
            placeholder="Enter Github Username"
            className="border border-gray-300 px-3 py-1 rounded w-50"
          />
          <button className="bg-gray-800 text-white px-3 py-1 rounded ml-2">
            Search
          </button>
        </div>
        <div className="mt-4 border border-gray-300 p-4 rounded md:w-1/2 mx-auto">
          <div className="img size-[200px] rounded-full bg-amber-100 mx-auto">
            <img src="" alt="" />
          </div>
          <div className="info">
            <p>
              <span className="font-bold">Name : </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
