import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DDAASHomePage } from "./components/pages/DDAASHomePage";
import { DDAASRequestSummaryPage } from "./components/pages/DDAASRequestSummaryPage.jsx";
import { DDAASSentPage } from "./components/pages/DDAASSentPage";
import { DDAASRequestForm } from "./components/pages/DDAASRequestForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DDAASHomePage />,
  },
  {
    path: "/summary",
    element: <DDAASRequestSummaryPage />,
  },
  {
    path: "/reference_code",
    element: <DDAASSentPage />,
  },
  {
    path: "/request_form",
    element: <DDAASRequestForm />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
