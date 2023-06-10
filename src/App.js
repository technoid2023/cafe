import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/Bookings";
import ContactUsPage from "./pages/ContactUsPage";
import MenuPage from "./pages/MenuPage";
import AboutUsPage from "./pages/AboutUsPage";
import TableBbookingPage from "./pages/TableBbookingPage";
import PartyBookingPage from "./pages/PartyBookingPage";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoreMenu from "./pages/MoreMenu";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bookings" element={<BookingPage />} />
        <Route path="/bookings/table-booking" element={<TableBbookingPage />} />
        <Route path="/bookings/party-booking" element={<PartyBookingPage />} />
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
