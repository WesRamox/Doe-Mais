import Navbar from "../ui/partials/Navbar";
import Footer from "../ui/partials/Footer";

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}