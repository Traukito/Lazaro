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
    <div className="flex flex-row justify-between items-center mt-1 py-7 bg-gradient-radial from-teal-950 to-slate-950">
      <div className="flex items-center mx-3 text-xl text-slate-200">
        <Link href="/">
          <span className="ml-5 font-serif text-3xl text-slate-400 hover:text-slate-100 transition-colors duration-1000 italic font-thin">
            Copilot System
          </span>
        </Link>
      </div>

      <nav className="flex items-center justify-center overflow-hidden">
        <ul className="flex flex-row mx-7">
          {linksNavBar.map(({ item, route }) => (
            <NavLink key={route} item={item} route={route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
