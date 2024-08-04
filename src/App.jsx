import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import Tech from "./pages/Tech";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Tech" element={<Tech />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
