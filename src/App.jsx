import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./features/components/Navbar";
import Footer from "./features/components/Footer";

import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Vehicles from "./pages/Vehicles";
import Favorites from "./pages/favorites";
import Orders from "./pages/Orders";
import Quote from "./pages/Quote";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;