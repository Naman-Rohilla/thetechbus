import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function Root() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Renders the nested route components */}
      <Footer />
    </>
  );
}

export default Root;
