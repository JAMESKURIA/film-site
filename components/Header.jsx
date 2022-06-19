import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <header className="py-10 px-4 flex justify-between items-center text-film-light bg-film-dark">
      <Link href="/">
        <a className="uppercase text-2xl font-bold tracking-wide cursor-pointer">
          Filmeral
        </a>
      </Link>
      <AiOutlineMenu size={35} className="cursor-pointer" />
    </header>
  );
};

export default Header;
