import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Accordian from "./Components/Accordian/Accordian";
import RandomColorGenerator from "./Components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./Components/StarRating/StarRating";
import ImagesSlider from "./Components/ImagesSlider/IMagesSlider";
import LoadingMoreProducts from "./Components/LoadingMoreProducts/LoadingMoreProducts";
import TreeVeiw from "./Components/TreeView/TreeView";

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
      {
        path: "loadingmoreproducts",
        element: <LoadingMoreProducts />,
      },
      {
        path: "treeveiw",
        element: <TreeVeiw />,
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
