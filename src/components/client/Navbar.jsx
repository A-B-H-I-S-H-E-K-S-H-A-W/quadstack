"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

export function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed z-50 top-5 inset-x-0 flex justify-between items-center md:px-20 px-4">
      {/* Logo */}
      <div>
        <h2 className="text-3xl font-bold text-background">Quadstack</h2>
      </div>

      {/* Desktop Menu */}
      <div className={cn("max-w-lg md:block hidden", className)}>
        <div className="relative rounded-full border border-transparent dark:bg-background dark:border-foreground bg-linear-to-r from-foreground to-foreground shadow-input px-8 py-4">
          <ul className="flex justify-center space-x-10 text-background">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center justify-between gap-2">
        <Button
          variant="outline"
          size="lg"
          className="rounded-3xl border-foreground text-foreground"
        >
          Connect
        </Button>
        <Button
          onClick={toggleMenu}
          variant="outline"
          className="md:hidden block rounded-full border-foreground text-foreground"
          size="lg"
        >
          {isMenuOpen ? <X /> : <ChevronDown />}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={cn(
          "absolute top-20 left-0 right-0 mx-auto w-[90%] rounded-2xl bg-quad-black border border-deep-space text-background flex flex-col items-center space-y-6 py-8 transition-all duration-300 ease-in-out md:hidden",
          isMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-5 pointer-events-none"
        )}
      >
        <Link
          href="/"
          onClick={toggleMenu}
          className="hover:text-neon-lilac transition-colors"
        >
          Home
        </Link>
        <Link
          href="/#services"
          onClick={toggleMenu}
          className="hover:text-neon-lilac transition-colors"
        >
          Services
        </Link>
        <Link
          href="/#contact"
          onClick={toggleMenu}
          className="hover:text-neon-lilac transition-colors"
        >
          Contact
        </Link>
        <Button
          onClick={toggleMenu}
          className="bg-quad-violet hover:bg-neon-lilac text-background rounded-full px-6"
        >
          Connect
        </Button>
      </div>
    </header>
  );
}
