import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import DeskNav from "./DeskNav";
import MobileNav from "./MobileNav";

const menuItems = [
  {
    label: "Home",
    url: "/",
    active: true,
  },
  {
    label: "Impact Lab",
    url: "/impact-lab",
    active: true,
  },
  {
    label: "Opportunities",
    url: "/Opportunities",
    active: true,
  },
  {
    label: "Media",
    url: "/media",
    active: true,
  },
  {
    label: "Blog",
    url: "/blog",
    active: true,
  },
  {
    label: "Events",
    url: "/events",
    active: true,
  },
  {
    label: "SPECTRUM",
    url: "/specturum",
    active: true,
  },
  {
    label: "Contact",
    url: "/contact",
    active: true,
  },
];

const logo = (
  <Link href="/">
    <Image src="/images/logo.png" width={50} height={50} />
  </Link>
);

export default function NavMenu() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <MobileNav menu={menuItems} logo={logo} />
      ) : (
        <DeskNav menu={menuItems} logo={logo} />
      )}
    </div>
  );
}
