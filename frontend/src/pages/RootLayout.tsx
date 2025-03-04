import Navbar from "../ui/partials/Navbar";

import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="pt-15">
        <Outlet />
      </div>
    </>
  )
}