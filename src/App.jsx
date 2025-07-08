import { Suspense, lazy } from "react";
import "./App.css";
import { Home } from "./Home";
import { Link, Route, Routes, useParams } from "react-router-dom";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Dashboard = lazy(() => import("./Dashboard"));
const NotFound = lazy(() => import("./NotFound"));

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link>Fake</Link>
        <Link to="/user/101">User 101</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="settings" element={<div>Settings Page</div>} />
            <Route path="profile" element={<div>Profile Page</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
