import { useEffect } from "react";
import "../game/sketch"; // only import to execute file

export default function GamePage() {
  useEffect(() => {
    return () => {
      if (window.remove) {
        window.remove(); // remove canvas on unmount
      }
    };
  }, []);

  return <div></div>;
}