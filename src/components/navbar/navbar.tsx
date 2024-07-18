import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <ul className="container flex gap-4 items-center py-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
