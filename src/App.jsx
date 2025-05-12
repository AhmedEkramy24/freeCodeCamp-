import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Accordian from "./Components/Accordian/Accordian";
import RandomColorGenerator from "./Components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./Components/StarRating/StarRating";
import ImagesSlider from "./Components/ImagesSlider/IMagesSlider";

const router = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "accordian",
        element: <Accordian />,
      },
      {
        path: "randomcolorgenerator",
        element: <RandomColorGenerator />,
      },
      {
        path: "starrating",
        element: <StarRating />,
      },
      {
        path: "imagesslider",
        element: <ImagesSlider />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
