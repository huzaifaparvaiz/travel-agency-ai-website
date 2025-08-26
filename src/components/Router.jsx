// Router.jsx
import React from "react";
import App from "./App";
import MagicBento from "./MagicBento";
import Destination from "./Destination";
import Booknow from "./Booknow";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} /> {/* 👈 Correct! Home page */}
        <Route path="/destinations" element={<Destination />} />
        <Route path="/about" element={<MagicBento />} />
        <Route path="/booknow" element={<Booknow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
