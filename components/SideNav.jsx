import { ActiveLink } from "components";

const SideNav = () => {
  return (
    <nav className="hidden md:flex md:fixed  h-[100vh] w-30 flex-col z-10 justify-around items-center">
      <ActiveLink href="/">
        <a>Home</a>
      </ActiveLink>

      <ActiveLink href="/services">
        <a>Our Services</a>
      </ActiveLink>

      <ActiveLink>
        <a>Our Projects</a>
      </ActiveLink>

      <ActiveLink href="/process">
        <a>How It Works</a>
      </ActiveLink>

      <ActiveLink href="/contact">
        <a>Contact Us</a>
      </ActiveLink>
    </nav>
  );
};

export default SideNav;
