import Link from "next/link";
import { useRouter } from "next/router";

export default function DeskNav({ menu, logo }) {
  const router = useRouter();

  return (
    <div className="px-6 py-2 bg-neutral-800 h-16">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {menu.slice(0, 4).map((obj, index) => {
            return (
              <ul key={index} className="tablet:hidden flex text-white">
                <li
                  className={`text-base tracking-wider hover:bg-neutral-600 hover:px-2 hover:py-1 hover:rounded-sm transition-all duration-500 ease-in-out ${
                    obj.url === router.asPath
                      ? "text-neutral-50 font-bold"
                      : "text-neutral-300 font-medium"
                  }`}
                >
                  <Link href={obj.url}>{obj.label}</Link>
                </li>
              </ul>
            );
          })}
        </div>

        <div>{logo}</div>

        <div className="flex items-center gap-10">
          {menu.slice(4).map((obj, index) => {
            return (
              <ul key={index} className="tablet:hidden flex text-white">
                <li
                  className={`text-base tracking-wider  hover:bg-neutral-600 hover:px-2 hover:py-1 hover:rounded-sm transition-all duration-500 ease-in-out ${
                    obj.url === router.asPath
                      ? "text-neutral-50 font-bold"
                      : "text-neutral-300 font-medium"
                  }`}
                >
                  <Link href={obj.url}>{obj.label}</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
}
