import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import FavoritePage from "./pages/FavoritePage.jsx";
import FavoriteDetail from "./pages/FavoriteDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
  },
  {
    path: "/signup", element: <SignUpPage />,
  }, 
  {
    path: "/login", element: <LoginPage />,
  }, 
  {
    path: "/fav", element: <FavoritePage />,
  }, 
  {
    path: "/fav/:id", element: <FavoriteDetail />,
  }, 
  {
    path: "*", element: <NotFoundPage />,
  }, 

  
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);