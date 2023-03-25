import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";

export default function MobileNav({ menu, logo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // stop background scrooling when the mobile navmenu appears
  useEffect(() => {
    const body = document.body;

    if (isMenuOpen) {
      body.classList.add("overflow-hidden");
    } else {
      body.classList.remove("overflow-hidden");
    }

    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <nav className=" overflow-hidden">
      <div className="px-4 py-1 bg-neutral-800 flex items-center justify-between fixed w-full z-30">
        <div className="flex items-center" onClick={toggleMenu}>
          {logo}
          <Link
            href="/"
            className="text-2xl ml-2 tracking-wider"
            onClick={toggleMenu}
          >
            STEMcIUB
          </Link>
        </div>

        <button className="text-white focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? (
            <HiXMark className="text-white text-3xl" />
          ) : (
            <HiBars3BottomRight className="text-white text-3xl" />
          )}
        </button>
      </div>

      <ul
        className={`${
          isMenuOpen
            ? "block opacity-100 translate-y-0 top-0"
            : "opacity-0 translate-y-full"
        } transition-all duration-500 ease-in-out p-6 h-screen fixed pt-16 left-0 z-20 bg-neutral-700 w-full`}
        //
        // menu items will appears from the top
        style={{
          transform: isMenuOpen ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        {menu.map((obj, index) => (
          <li key={index} className="my-4">
            <Link
              className={` text-lg tracking-wider hover:text-primary-500 hover:bg-neutral-600 hover:p-2 hover:rounded-sm transition-all duration-500 ease-in-out ${
                obj.url === router.asPath
                  ? "text-neutral-50 font-bold"
                  : "text-neutral-400 font-medium"
              }`}
              href={obj.url}
              onClick={toggleMenu}
            >
              {obj.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
