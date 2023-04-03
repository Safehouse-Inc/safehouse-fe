import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DDAASHomePage } from "./components/pages/DDAASHomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DDAASHomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
