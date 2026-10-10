import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Menucontent1 from "./sections/Menu/Menucontent1";
import Home from "./sections/Home/Home";
import Gallery1 from "./sections/Gallery/Gallery1";
import Abouthero from "./sections/About/Abouthero";
import Contact from "./sections/Contact/Contact";
import ScrollTop from "./components/ScrollTop";
import Whatsappbutton from "./components/Whatsappbutton";
import Catering from "./sections/Catering/Catering";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Login from "./Admin/Login/Login";
import ProtectedRoute from "./Admin/ProtectedRoute";
import Dashboard from "./Admin/Dashboard/Dashboard";
import Restaurant from "./Admin/Restaurant/Restaurant";

function App() {

  const [orderOpen, setOrderOpen] = useState(false);
  const { pathname } = useLocation();
  const isAdminRoute = pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && (
        <Navbar orderOpen={orderOpen} setOrderOpen={setOrderOpen} />
      )}
      <ScrollTop />

      <Routes>

        <Route path="/" element={<Home setOrderOpen={setOrderOpen} />} />

        <Route path="/menu" element={<Menucontent1 />} />
        <Route path="/gallery" element={<Gallery1 />} />
        <Route path="/about" element={<Abouthero />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catering" element={<Catering />} />

        <Route
          path="/admin/login"
          element={<Login />}
        />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/restaurants/:restaurantId"
          element={
            <ProtectedRoute>
              <Restaurant />
            </ProtectedRoute>
          }
        />

      </Routes>

      <Whatsappbutton />
      <ScrollToTopButton />
    </>
  );
}

export default App;
