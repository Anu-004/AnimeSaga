import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Skills from "./Pages/Skills.jsx";
import App from "./App.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);
const Router = () => {
    return <RouterProvider router={route} />
}
export default Router