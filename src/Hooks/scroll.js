import { useEffect } from "react";

export const useScrollToTop = () => {
    useEffect(() => {
      window.scrollTop({ 
        top:0, 
        left: 0,
        behavior: "smooth",
      });
    }, []);
  }
