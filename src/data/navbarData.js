import logo from "@/images/logo-1-1.png";
import logo2 from "@/images/logo-2-1.png";

const navbarData = {
  logo,
  logo2,
  rightBtn: {
    title: "Contact",
    href: "#",
  },
  navItems: [
    {
      id: 1,
      title: "Home",
      href: "#home",
      subItems: [
        {
          id: 1,
          title: "Home One",
          href: "/",
        },
        {
          id: 2,
          title: "Home Two",
          href: "/home2",
        },
      ],
    },
    {
      id: 2,
      title: "Features",
      href: "#services",
    },
    {
      id: 3,
      title: "App Screens",
      href: "#screens",
    },
    {
      id: 4,
      title: "Pricing",
      href: "#pricing",
    },
    {
      id: 5,
      title: "Blog",
      href: "#blog",
      subItems: [
        {
          id: 1,
          title: "Blog Style 01",
          href: "/blog",
        },
        {
          id: 2,
          title: "Blog Details",
          href: "/blog-details",
        },
      ],
    },
  ],
};

export default navbarData;
