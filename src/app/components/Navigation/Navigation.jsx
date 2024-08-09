// @autor Marcos Amaya Soto
import Link from "next/link";
import { linksNavBar } from "./itemsNav.js";

const NavLink = ({ item, route }) => (
  <li className="mx-5">
    <Link href={route}>{item}</Link>
  </li>
);



const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center mt-1 py-5 rounded-xl bg-teal-800 transition duration-1000 hover:bg-teal-600">
      <div className="flex items-center mx-3 text-xl text-slate-200">
        <Link href="/">
          <span className="ml-3 font-serif text-3xl text-slate-300 italic">
            Copilot System
          </span>
        </Link>
      </div>

      <nav className="flex items-center justify-center rounded-2xl overflow-hidden">
        <ul className="flex flex-row mx-5">
          {linksNavBar.map(({ item, route }) => (
            <NavLink key={route} item={item} route={route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
