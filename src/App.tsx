import SouthernSkyParallax from "./components/ui/SouthernSkyParallax";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <SouthernSkyParallax />
      <Analytics />
    </>
  );
}

export default App;
