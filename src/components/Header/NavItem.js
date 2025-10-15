import { useRootContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();
  const [subActive, setSubActive] = useState(false);
  const { currentActive } = useRootContext();

  const handleActive = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSubActive((preActive) => !preActive);
  };

  const { title, href = "", subItems } = navItem;

  const current = pathname.includes("blog") ? "#blog" : currentActive;

  return (
    <li className={current === href ? "current scrollToLink" : "scrollToLink"}>
      {href.includes("#") ? (
        <a href={href}>
          {title}{" Hussain"}
          {subItems?.length > 0 && (
            <button onClick={handleActive} className="sub-nav-toggler">
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
          )}
        </a>
      ) : (
        <Link href={href}>
          <a href={href}>
            {title}{" "}
            {subItems?.length > 0 && (
              <button onClick={handleActive} className="sub-nav-toggler">
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
            )}
          </a>
        </Link>
      )}
      <ul className={subActive ? "sub-menu d-block" : "sub-menu d-none"}>
        {subItems?.length > 0 &&
          subItems?.map((subItem) => (
            <li key={subItem.id}>
              <Link href={subItem.href}>
                <a href={subItem.href}>{subItem.title}</a>
              </Link>
            </li>
          ))}
      </ul>
    </li>
  );
};

export default NavItem;
