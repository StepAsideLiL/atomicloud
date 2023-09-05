import Link from "next/link";
import Logo from "./Logo";

const LogoLink = () => {
  return (
    <Link href="/" className="inline-block">
      <Logo />
    </Link>
  );
};

export default LogoLink;
