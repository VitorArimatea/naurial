import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={40} height={35} />
        </div>
      </Link>
      <div className="flex gap-8">
        <NavItems />
        <Link href="sign-in">Sign In</Link>
      </div>
    </nav>
  );
}
export default Navbar;
