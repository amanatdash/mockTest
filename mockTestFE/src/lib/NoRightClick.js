import { useEffect } from "react";

function NoRightClick() {
  useEffect(() => {
    const handleBlock = (e) => {
      // Right click
      if (e.type === "contextmenu") {
        e.preventDefault();
      }

      // Block shortcuts
      if (
        e.key === "F12" ||
        (e.ctrlKey &&
          ["u", "i", "c", "j", "r"].includes(e.key.toLowerCase())) ||
        (e.ctrlKey &&
          e.shiftKey &&
          ["i", "j", "c"].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    // prevent back navigation
    const preventBack = () => {
      window.history.pushState(null, "", window.location.href);
    };

    // push once only
    window.history.pushState(null, "", window.location.href);

    window.addEventListener("popstate", preventBack);

    document.addEventListener("contextmenu", handleBlock);
    document.addEventListener("keydown", handleBlock);

    return () => {
      window.removeEventListener("popstate", preventBack);

      document.removeEventListener("contextmenu", handleBlock);
      document.removeEventListener("keydown", handleBlock);
    };
  }, []);

  return null;
}

export default NoRightClick;