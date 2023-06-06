import React from "react";
import Home from "./pages/home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const routerEl = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Home />} />)
);

export default function App() {
  return <RouterProvider router={routerEl} />;
}
