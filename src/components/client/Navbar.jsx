"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { DialogBox } from "../custom/DialogBox";

export function Navbar({ className }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="fixed z-50 inset-x-0 backdrop-blur-lg h-20">
      <div className="relative top-3 flex justify-between items-center md:px-20 px-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2 className="text-3xl font-bold text-background">Quadstack</h2>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className={cn("max-w-2xl md:block hidden", className)}>
          <div className="relative rounded-full border border-transparent dark:bg-background dark:border-foreground bg-linear-to-r from-deep-space to-foreground shadow-input px-8 py-4">
            <ul className="flex justify-center space-x-10 text-background">
              <li>
                <Link
                  className="hover:text-neon-lilac transition-colors"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-neon-lilac transition-colors"
                  href="/#services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-neon-lilac transition-colors"
                  href="/projects"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-end gap-2">
          <DialogBox
            openButtonTitle={"Connnect with us"}
            sendButton={"Send Email"}
            contentHeading={"Email Body:"}
          />
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
            href="/projects"
            onClick={toggleMenu}
            className="hover:text-neon-lilac transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
}
