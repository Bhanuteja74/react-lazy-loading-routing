import { Suspense, lazy, useState } from "react";
import "./App.css";
import { Home } from "./Home";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <button onClick={() => setShowAbout(true)}>Show About</button>
      <button onClick={() => setShowContact(true)}>Show Contact</button>
      <Home />
      {showAbout && (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )}

      {showContact && (
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      )}
    </>
  );
}

export default App;
