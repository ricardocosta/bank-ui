import { Navigate } from "react-router-dom";

import { App, Dashboard, NotFound, Transactions } from "../pages/";

export default [
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Navigate replace to="/dashboard" /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
