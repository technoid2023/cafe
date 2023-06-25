import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Order from "./pages/Order";
import ContactUsPage from "./pages/ContactUsPage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import TableBbookingPage from "./pages/TableBbookingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoreMenu from "./pages/MoreMenu";
import "./App.css";

import Booking from "./pages/Bookings";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={<Order />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/table-booking" element={<TableBbookingPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:route" element={<MoreMenu />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
