import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const IconRenderer = ({ icon: IconComp, className }) => {
  if (!IconComp) return null;
  return (
    <IconComp className={cn("md:size-6 size-5 ml-2 inline-block", className)} />
  );
};

const CustomCard = ({ className, data }) => {
  return (
    <Card
      className={cn(
        "max-w-2xl bg-linear-to-br from-cosmic-blue to-quad-black text-background border border-quad-black shadow-xl rounded-2xl transition-all hover:shadow-quad-black md:px-5 md:py-8",
        className
      )}
    >
      <CardHeader>
        <CardTitle className="text-background md:text-3xl text-xl font-semibold">
          {data?.title || "Title"}
        </CardTitle>
        <CardDescription className="text-muted-foreground md:text-lg text-base mt-4">
          {data?.description || "Description"}
        </CardDescription>
      </CardHeader>

      {/* <CardContent>
        <p className="text-sm text-muted-foreground">
          We build digital experiences that blend design and performance.
        </p>
      </CardContent> */}

      <CardFooter>
        {data?.isButton && (
          <Button
            asChild
            size={"lg"}
            className={cn(
              "bg-quad-violet hover:bg-neon-lilac text-background transition-colors",
              data.buttonClassName
            )}
          >
            <Link href={data?.link}>
              {data?.buttonTitle} <IconRenderer icon={data?.icon} />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
