import Header from "./Header/Header.js";
import Home from "./Home/Home.js";

import PortifolioHome from "./Portifolio/PortifolioHome.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="Header" element={<Header />} />
            <Route path="Home" element={<Home />} />
            <Route path="PortifolioHome" element={<PortifolioHome />} />
            </Routes>
        </BrowserRouter>
    );
}
