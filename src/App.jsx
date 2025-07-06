import { Suspense, lazy } from "react";
const About = lazy(() => import("./About"));
import "./App.css";
import { Home } from "./Home";

function App() {
  return (
    <>
      <Home />
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </>
  );
}

export default App;
