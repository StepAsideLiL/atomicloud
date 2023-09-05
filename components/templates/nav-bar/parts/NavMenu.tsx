import { Button } from "@/components/ui/button";
import { menuList } from "@/lib/constants/menu-list";
import Link from "next/link";
import React from "react";

const NavMenu = () => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-0.5">
        {menuList.map((item, index) => (
          <ActiveLink key={index}>{item.title}</ActiveLink>
        ))}
      </ul>
    </nav>
  );
};

const ActiveLink = ({
  children,
  href = "",
  active = false,
}: {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
}) => {
  return (
    <li>
      <Button asChild variant="link">
        <Link href={href}>{children}</Link>
      </Button>
    </li>
  );
};

export default NavMenu;
