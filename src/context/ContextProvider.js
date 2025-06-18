import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [currentActive, setCurrentActive] = useState("");

  const { pathname } = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
        ? value
        : !!value
    );
  };

  useEffect(() => {
    toggleMenu(false);
    if (pathname.includes("blog")) {
      setCurrentActive("");
    }
  }, [pathname]);

  const value = {
    menuStatus,
    toggleMenu,
    currentActive,
    setCurrentActive,
  };

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
