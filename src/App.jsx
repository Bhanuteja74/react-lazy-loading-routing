import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Home } from "./Home";
import { Link, Route, Routes } from "react-router-dom";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

const NotFound = () => {
  return <div>404 Not Found</div>;
};

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
