import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "@/router/routers";
document.title = "React App";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
