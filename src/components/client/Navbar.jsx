"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed z-50 top-5 inset-x-0 flex justify-between items-center md:px-20 px-4">
      <div>
        <h2 className="text-3xl font-bold text-background">Quadstack</h2>
      </div>
      <div className={cn("max-w-lg md:block hidden", className)}>
        <div className="relative rounded-full border border-transparent dark:bg-background dark:border-foreground bg-linear-to-r from-foreground to-foreground shadow-input px-8 py-4">
          <ul className="flex justify-center space-x-10 text-background">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Services</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2">
        <Button variant={"outline"} size={"lg"} className={"rounded-3xl"}>
          Connect
        </Button>
        <Button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          variant={"outline"}
          className={"md:hidden block rounded-full"}
          size={"lg"}
        >
          <ChevronDown />
        </Button>
      </div>
    </header>
  );
}
