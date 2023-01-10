import { App, Dashboard, NotFound, Transactions } from "../pages/";

export default [
  {
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "transactions", element: <Transactions /> },
    ],
  },
];
