import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import "./ui/styles/fonts.css";

export default function App() {

  return(
      <RouterProvider router={router} />
  )
}