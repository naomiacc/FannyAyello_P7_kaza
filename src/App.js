import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Apartments from "./pages/Apartments";
import Header from "./components/Header";

import "./styles/index.scss";
import "./styles/normalize.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartments/*" element={<Apartments />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
