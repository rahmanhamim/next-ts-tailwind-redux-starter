import Link from "next/link";
// import SiteLogo from "../icons/siteLogo";
import Button from "@/components/ui/button";
import { navItems } from "./navbar.helper";
import MobileNavbar from "./mobileNavbar";

const Navbar = () => {
  return (
    <nav className="border-b border-primary-100">
      <div className="container flex items-center justify-between gap-10 py-4">
        <div className="flex items-center gap-10">
          <Link href="/">SiteLogo</Link>

          {/* hidden on desktop */}
          <ul className="hidden gap-6 lg:flex">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-sm text-content-500 transition-all hover:text-primary-500"
                  href={item?.href || "#"}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* hidden on desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/register">
            <Button intent="neutral" modifier="outline" size="small">
              Sign Up
            </Button>
          </Link>

          <Link href="/login">
            <Button
              intent="primary"
              size="small"
              modifier="ghost"
              className="p-0"
            >
              Sign in
            </Button>
          </Link>
        </div>

        {/* show only on mobile/small devices */}
        <MobileNavbar className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
