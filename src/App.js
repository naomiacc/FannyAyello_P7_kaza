import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import About from "./Pages/About";
import Apartments from "./Pages/Apartments";
import Header from "./Components/Header";

import "./Styles/index.scss";
import "./Styles/normalize.css";

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
