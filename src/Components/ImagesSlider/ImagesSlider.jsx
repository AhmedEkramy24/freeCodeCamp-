import axios from "axios";
import { useState } from "react";

export default function ImagesSlider() {
  const [limit, setLimit] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [turn, setTurn] = useState(0);

  async function getPhotos(limit) {
    setIsSubmit(true);
    if (limit > 0 && limit < 26) {
      try {
        let { data } = await axios.get(
          `https://picsum.photos/v2/list?page=1&limit=${limit}`
        );
        setImages(data);
        setError("");
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmit(false);
      }
    } else {
      setError("the number is out the limit !");
      setIsSubmit(false);
    }
  }
  return (
    <>
      <div className="container p-2">
        <div className="form my-3">
          <label
            htmlFor="photos"
            className="block my-2 text-gray-800 font-semibold"
          >
            Enter number of photos form 1 to 25
          </label>
          <input
            type="number"
            min={1}
            max={25}
            className="border border-gray-500 focus:outline-none rounded-md px-3 py-1"
            id="photos"
            onChange={(e) => setLimit(e.target.value)}
          />
          {isSubmit ? (
            <button className="text-white bg-gray-800 px-3 py-1 mx-2 rounded-md">
              <i className="fas fa-spinner fa-spin"></i>
            </button>
          ) : (
            <button
              onClick={() => getPhotos(limit)}
              className="text-white bg-gray-800 px-3 py-1 mx-2 rounded-md"
            >
              Submit
            </button>
          )}
          {error && <p className="text-red-600 font-semibold my-3">{error}</p>}
        </div>
        {images && images.length ? (
          <div className="img relative rounded-lg overflow-hidden md:w-1/2 mx-auto">
            <img
              src={images[turn].download_url}
              alt="random photo"
              className="w-full"
            />
            <span
              onClick={() => setTurn(turn == images.length - 1 ? 0 : turn + 1)}
              className="absolute top-1/2 -translate-y-1/2 right-2 size-8 rounded-full bg-slate-300 flex justify-center items-center"
            >
              <i className="fa-solid fa-arrow-right fa-lg cursor-pointer"></i>
            </span>
            <span
              onClick={() => setTurn(turn == 0 ? images.length - 1 : turn - 1)}
              className="absolute top-1/2 -translate-y-1/2 left-2 size-8 rounded-full bg-slate-200 flex justify-center items-center"
            >
              <i className="fa-solid fa-arrow-left fa-lg cursor-pointer"></i>
            </span>
            <div className="indecators absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap w-full justify-center space-x-1">
              {images.map((_, index) => (
                <span
                  onClick={() => {
                    setTurn(index);
                  }}
                  key={index}
                  className={`size-4 ${
                    index === turn ? "bg-slate-100" : "bg-slate-400 "
                  } rounded-full cursor-pointer`}
                ></span>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
