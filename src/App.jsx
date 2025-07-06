import { Suspense, lazy, useState } from "react";
const About = lazy(() => import("./About"));
import "./App.css";
import { Home } from "./Home";

function App() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <button onClick={() => setShowAbout(true)}>Show About</button>
      <Home />
      {showAbout && (
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      )}
    </>
  );
}

export default App;
