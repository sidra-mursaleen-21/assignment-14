import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../pages/Home";
import Todo from "../../pages/Todoes";
import Modal from "../../pages/Modal";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/todo",
        element: <Todo/>
      },
      {
        path: "/modal/:id",
        element: <Modal/>
      }
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
