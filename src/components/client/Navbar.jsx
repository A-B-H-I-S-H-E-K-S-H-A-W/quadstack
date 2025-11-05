"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export function Navbar({ className }) {
  return (
    <header className="fixed top-5 inset-x-0 flex justify-between items-center px-20">
      <div>
        <h2 className="text-3xl font-bold text-background">QuadStack</h2>
      </div>
      <div className={cn("max-w-lg z-50", className)}>
        <div className="relative rounded-full border border-transparent dark:bg-background dark:border-foreground bg-linear-to-r from-foreground to-foreground shadow-input px-8 py-3">
          <ul className="flex justify-center space-x-8 text-background">
            <li>Services</li>
            <li>Products</li>
            <li>Pricing</li>
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
