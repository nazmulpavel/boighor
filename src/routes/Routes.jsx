import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import PublicPage from "../pages/PublicPage";
import PrivatePage from "../pages/PrivatePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
            path: "/public",
            element: <PublicPage />,
          },
          {
            path: "/private",
            element: <PrivatePage />,
          },
          {
            path: "/login",
            element: <LoginPage />,
          },
      ],
    },
  ]);


  export default router