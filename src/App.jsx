import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Accordian from "./Components/Accordian/Accordian";
import RandomColorGenerator from "./Components/RandomColorGenerator/RandomColorGenerator";

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
