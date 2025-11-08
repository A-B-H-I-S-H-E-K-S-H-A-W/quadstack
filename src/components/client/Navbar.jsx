"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export function Navbar({ className }) {
  return (
    <header className="fixed z-50 top-5 inset-x-0 flex justify-between items-center md:px-20 px-4">
      <div>
        <h2 className="text-3xl font-bold text-background">Quadstack</h2>
      </div>
      <div className={cn("max-w-lg", className)}>
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
      <div>
        <Button variant={"outline"} size={"lg"} className={"rounded-3xl"}>
          Connect
        </Button>
      </div>
    </header>
  );
}
