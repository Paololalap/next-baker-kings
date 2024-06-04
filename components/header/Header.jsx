import NavLink from "@/components/NavLinks";
import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-[54px] bg-[#F8D0A1]">
      <nav className="mx-auto flex h-full max-w-screen-md items-center justify-between overflow-hidden px-2 md:px-0">
        <div className="relative h-[37px] w-[70px] shrink-0">
          <Link href="/">
            <Image
              src={Logo}
              alt="Baker Kings' Logo"
              className="object-cover"
              fill
            />
          </Link>
        </div>
        <ul className="flex h-full max-w-sm flex-1 items-center justify-between font-bold">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/products">Products</NavLink>
          </li>
          <li>
            <NavLink href="/tutorials">Tutorials</NavLink>
          </li>
          <li>
            <NavLink href="/about">About</NavLink>
          </li>
        </ul>
        <div className="flex max-w-[5rem] justify-between sm:flex-1">
          <button aria-label="Shopping Cart Button">
            <svg className="max-h-[33px] max-w-[29.5px] text-[#5C4B44] hover:text-[#5C4B44]/90">
              <use href={`./icons/sprite.svg#tabler/shopping-cart-filled`} />
            </svg>
          </button>
          <button aria-label="User Button">
            <svg className="max-h-[33px] max-w-[29.5px] text-[#5C4B44] hover:text-[#5C4B44]/90">
              <use href={`./icons/sprite.svg#tabler/user-filled`} />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
