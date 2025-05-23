import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function LoadingMoreProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [skip, setSkip] = useState(0);
  const [isClickLoadingBtn, setIsClickLoadingBtn] = useState(false);

  async function fetchProducts() {
    setIsClickLoadingBtn(true);
    try {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${
          skip === 0 ? 0 : skip * 10
        }`
      );
      console.log(data);
      
      setProducts((oldProducts) => [...oldProducts, ...data.products]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setIsClickLoadingBtn(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [skip]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <h3 className="text-center text-gray-950 text-3xl">
            Recent Products
          </h3>
          <div className="flex flex-wrap ">
            {products.map((product,index) => (
              <div
                key={index}
                className="p-2 lg:w-1/5 md:w-1/3 sm:w-1/2 w-full"
              >
                <div className="border border-gray-300 rounded-lg ">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full object-cover rounded-t-lg"
                  />
                  <div className="info p-2">
                    <h4 className="text-center text-xl font-semibold">
                      {product.title.split(" ", 3).join(" ")}
                    </h4>

                    <p className="text-center text-gray-800 font-bold">
                      ${product.price}
                    </p>
                    <button className="text-white mt-1 bg-gray-800 block text-center w-full rounded-md py-1">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="text-center">
        {isClickLoadingBtn ? (
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md mt-4">
            <i className="fas fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button
            disabled={skip === 4}
            onClick={() => {
              const newSkip = skip+1;
              setSkip(newSkip);
            }}
            className={`bg-gray-800 text-white px-4 py-2 rounded-md mt-4 ${
              skip === 4 ? "opacity-40" : ""
            }`}
          >
            Load More Products
          </button>
        )}
        {
          skip === 4 && <p className="text-gray-900 my-3 font-bold">No more products, we finished here.</p>
        }
      </div>
    </>
  );
}

