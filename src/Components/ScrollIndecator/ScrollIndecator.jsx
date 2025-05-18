import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function ScrollIndecator() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [width, setWidth] = useState("0%");

  async function fetchData() {
    try {
      let { data } = await axios.get(
        "https://dummyjson.com/products?limit=100"
      );
      setProducts(data.products);
    } catch (error) {
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrolled = scrollY;
      let heightOfDocument =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let width = `${(scrolled / heightOfDocument) * 100}%`;
      setWidth(width);

      return () => window.removeEventListener("scroll", () => {});
    });
  }, []);
  return (
    <>
      <div
        style={{ width: width }}
        className={`scroll-bar h-2 bg-blue-500 fixed top-0 left-0 z-50`}
      ></div>

      <header className="bg-gray-800 text-white text-center p-2">
        <h1 className="text-3xl">Scroll Indecator</h1>
      </header>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="container text-center">
          {products.map((product, index) => (
            <p key={index}>{product.title}</p>
          ))}
        </div>
      )}
    </>
  );
}
