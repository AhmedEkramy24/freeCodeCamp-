import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Accordian from "./Components/Accordian/Accordian";
import RandomColorGenerator from "./Components/RandomColorGenerator/RandomColorGenerator";
import StarRating from "./Components/StarRating/StarRating";
import ImagesSlider from "./Components/ImagesSlider/IMagesSlider";
import LoadingMoreProducts from "./Components/LoadingMoreProducts/LoadingMoreProducts";
import TreeVeiw from "./Components/TreeView/TreeView";
import QRGenerator from "./Components/QRGenerator/QRGenerator";
import DarkModeNative from "./Components/DarkModeNative/DarkModeNative";
import DarkModeTailwind from "./Components/DarkModeTailwind/DarkModeTailwind";
import ScrollIndecator from "./Components/ScrollIndecator/ScrollIndecator";
import NavAndTabs from "./Components/NavAndTabs/NavAndTabs";
import OpenModal from "./Components/OpenModal/OpenModal";
import GithubProfileFinder from "./Components/GithubProfileFinder/GithubProfileFinder";

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
      {
        path: "qrgenerator",
        element: <QRGenerator />,
      },
      {
        path: "darkmodenative",
        element: <DarkModeNative />,
      },
      {
        path: "darkmodetailwind",
        element: <DarkModeTailwind />,
      },
      {
        path: "scrollindecators",
        element: <ScrollIndecator />,
      },
      {
        path: "navandtabs",
        element: <NavAndTabs />,
      },
      {
        path: "openmodal",
        element: <OpenModal />,
      },
      {
        path: "githubprofilefinder",
        element: <GithubProfileFinder />,
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
