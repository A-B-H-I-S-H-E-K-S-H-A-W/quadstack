"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

export function DialogBox({ openButtonTitle, sendButton }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">
          {openButtonTitle || "Open Dialog"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Enter details and click send to send this email body.
          </DialogDescription>
        </DialogHeader>

        {/* Full Name */}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
        </div>

        {/* Topic Selection */}
        <div className="grid gap-4">
          <Label>Discussion Topic</Label>
          <RadioGroup
            onValueChange={(value) => handleChange("topic", value)}
            value={formData.topic}
            className="grid grid-cols-1 gap-3"
          >
            {/* Collaborate */}
            <Label
              htmlFor="collaborate"
              className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-start justify-center transition hover:border-primary ${
                formData.topic === "collaborate"
                  ? "border-primary bg-primary/10"
                  : "border-foreground/20"
              }`}
            >
              <RadioGroupItem
                value="collaborate"
                id="collaborate"
                className="sr-only"
              />
              <span className="font-medium text-foreground">Collaborate</span>
              <span className="text-xs text-muted-foreground mt-1">
                Work together on a creative or technical project.
              </span>
            </Label>

            {/* Project Discussion */}
            <Label
              htmlFor="project-discussion"
              className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-start justify-center transition hover:border-primary ${
                formData.topic === "project-discussion"
                  ? "border-primary bg-primary/10"
                  : "border-foreground/20"
              }`}
            >
              <RadioGroupItem
                value="project-discussion"
                id="project-discussion"
                className="sr-only"
              />
              <span className="font-medium text-foreground">
                Project Discussion
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                Talk about potential projects or ideas.
              </span>
            </Label>

            {/* Hiring */}
            <Label
              htmlFor="hiring"
              className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-start justify-center transition hover:border-primary ${
                formData.topic === "hiring"
                  ? "border-primary bg-primary/10"
                  : "border-foreground/20"
              }`}
            >
              <RadioGroupItem value="hiring" id="hiring" className="sr-only" />
              <span className="font-medium text-foreground">Hiring</span>
              <span className="text-xs text-muted-foreground mt-1">
                Looking to hire for a role or position.
              </span>
            </Label>
          </RadioGroup>
        </div>

        {/* Footer */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit}>
            {sendButton || "Send"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
