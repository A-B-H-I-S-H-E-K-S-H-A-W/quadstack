// components/TestimonialCard.jsx
import React from "react";
import { cn } from "@/lib/utils";
import { User } from "lucide-react";

const TestimonialCard = ({ name, role, feedback, className }) => {
  return (
    <div
      className={cn(
        "bg-deep-space border border-deep-space rounded-2xl p-8 text-center text-background hover:shadow-quad-violet transition-all",
        className
      )}
    >
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12 bg-deep-space rounded-full flex items-center justify-center">
          <User className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
      <p className="italic text-muted-foreground leading-relaxed mb-6">
        “{feedback}”
      </p>
      <h4 className="text-neon-lilac font-semibold">{name}</h4>
      <p className="text-sm text-muted-foreground mt-1">{role}</p>
    </div>
  );
};

export default TestimonialCard;
