import { createBrowserRouter } from "react-router-dom";
import MinLayout from "../layouts/MinLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MinLayout />,
    children: [
        { 
            path: "/", 
            element: <Home/> 
        }
    ],
  },
]);

export default router;
