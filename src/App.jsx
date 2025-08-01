import { Suspense, lazy } from "react";
import "./App.css";
import { Home } from "./Home";
import { Link, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";
const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));
const Dashboard = lazy(() => import("./Dashboard"));
const User = lazy(() => import("./User"));

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link>Fake</Link>
        <Link to="/user/101">User</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
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
