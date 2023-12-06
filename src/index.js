import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./screens/Landing";
import RegistrationPage from "./screens/RegistrationPage";
import LovedOnesPage from "./screens/LovedOnesPage";
import DetailsPage from "./screens/Details";
import FinalLyrics from "./screens/FinalLyrics";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/register",
        element: <RegistrationPage />,
      },
      {
        path: "/lovedones",
        element: <LovedOnesPage />,
      },
      {
        path: "/details",
        element: <DetailsPage />,
      },
      {
        path: "/lyrics",
        element: <FinalLyrics />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
