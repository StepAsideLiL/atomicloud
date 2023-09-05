import LogoLink from "@/components/site-ui/LogoLink";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import NavMenu from "./parts/NavMenu";

const Navbar = () => {
  return (
    <header className="px-2 py-2">
      <div className="flex items-center justify-between w-full">
        <div className="w-full">
          <LogoLink />
        </div>

        <div className="justify-center hidden w-full md:flex">
          <NavMenu />
        </div>

        <div className="flex justify-end w-full">
          <div className="hidden space-x-3 md:block">
            <Button asChild>
              <Link href="/signin">Sign In</Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>

          <div className="block md:hidden">Menu</div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
