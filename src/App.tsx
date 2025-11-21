import { useState, useEffect } from "react";
import Component1440Homepage from "./imports/1440Homepage";
import Component402HomepageIPhone16Pro from "./imports/402HomepageIPhone16Pro";
import { StickyBottomCTA } from "./components/ResponsiveWrapper";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on mount
    checkMobile();
    
    // Check on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {isMobile ? <Component402HomepageIPhone16Pro /> : <Component1440Homepage />}
      <StickyBottomCTA />
    </div>
  );
}