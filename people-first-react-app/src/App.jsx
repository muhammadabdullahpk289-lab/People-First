import { Routes, Route, useLocation } from "react-router-dom";

import ActivePage from "./pages/ActivePage";
import Home from "./pages/Home";
import About from "./pages/About";
import Podcasts from "./pages/Podcasts";
import WhatWeDo from "./pages/WhatWeDo";
import GrowWithUs from "./pages/GrowWithUs";
import IdeasLab from "./pages/IdeasLab";
import Insights from "./pages/Insights";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import SayHello from "./pages/SayHello";

import SideNavbar from "./components/SideNavbar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // Active Page aur Say Hello par SideNavbar hide
  const hideSideNavbar =
    location.pathname === "/" ||
    location.pathname === "/say-hello";

  // Active Page aur Say Hello par Footer hide
  const hideFooter =
    location.pathname === "/" ||
    location.pathname === "/say-hello";

  return (
    <>
      {/* SIDE NAVBAR */}
      {!hideSideNavbar && <SideNavbar />}

      {/* PAGES */}
      <Routes>
        {/* ACTIVE PAGE — MAIN / FRONT PAGE */}
        <Route path="/activepage" element={<ActivePage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/grow-with-us" element={<GrowWithUs />} />
        <Route path="/ideas-lab" element={<IdeasLab />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/say-hello" element={<SayHello />} />
      </Routes>

      {/* FOOTER */}
      {!hideFooter && <Footer />}
    </>
  );
}