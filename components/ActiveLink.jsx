import { useRouter } from "next/router";

export default function ActiveLink({ children, href }) {
  const router = useRouter();
  const active = router.pathname === href;

  const handleClick = (e) => {
    e.preventDefault();

    router.push(href ? href : "/");
  };

  return (
    <a
      href={href ? href : "/"}
      onClick={handleClick}
      className={`-rotate-90 text-film-accent font-semibold whitespace-nowrap cursor-pointer hover:border-b py-1 ${
        active && "text-film-white border-b "
      } `}
    >
      {children}
    </a>
  );
}
