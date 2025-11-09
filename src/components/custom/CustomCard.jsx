import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const CustomCard = ({ className, title, description }) => {
  return (
    <Card
      className={cn(
        "max-w-2xl bg-linear-to-br from-deep-space to-quad-black text-background border border-deep-space shadow-xl rounded-2xl transition-all hover:shadow-quad-violet/40",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-neon-lilac text-xl font-semibold">
          {title || "Title"}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-sm">
          {description || "Description"}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">
          We build digital experiences that blend design and performance.
        </p>
      </CardContent>

      <CardFooter>
        <Button className="bg-quad-violet hover:bg-neon-lilac text-background transition-colors">
          Book 15 Min Call
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
