import React, { useState, useEffect } from "react";
import Landingpage from "./Landingpage";
import App from "./App";

const AppWrapper = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    // Set a timeout to switch from landing page to main app after 5 seconds
    const timer = setTimeout(() => {
      setShowLanding(false);
    }, 2000);

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLanding ? <Landingpage /> : <App />}
    </>
  );
};

export default AppWrapper;