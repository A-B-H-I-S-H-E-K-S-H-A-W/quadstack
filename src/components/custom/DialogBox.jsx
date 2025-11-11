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
import { Textarea } from "@/components/ui/textarea"; // ✅ Added for message field
import { generateEmailHTML } from "@/data/email-topic";
import { sendEmail } from "@/store/slice/client-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

export function DialogBox({ openButtonTitle, sendButton }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.client);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.topic) {
      newErrors.topic = "Please select a discussion topic.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      toast.error("Please fix the form errors before sending.");
      return;
    }

    const htmlBody = generateEmailHTML(
      formData.topic,
      formData.name,
      formData.email
    );

    const payload = {
      userEmail: formData.email,
      name: formData.name,
      topic: formData.topic,
      message: formData.message,
      html: htmlBody,
    };

    try {
      const result = await dispatch(sendEmail(payload)).unwrap();
      if (result.success) {
        toast.success("Email sent successfully", {
          description: result.message,
        });
      }
      setFormData({ name: "", email: "", topic: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong!", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">
          {openButtonTitle || "Open Dialog"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Contact Us</DialogTitle>
          <DialogDescription>
            Enter details and click send to contact our team.
          </DialogDescription>
        </DialogHeader>

        {/* Full Name */}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={errors.name ? "border-primary" : ""}
            />
            {errors.name && (
              <p className="text-xs text-primary">{errors.name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={errors.email ? "border-primary" : ""}
            />
            {errors.email && (
              <p className="text-xs text-primary">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Topic Selection */}
        <div className="grid gap-4">
          <Label>Discussion Topic</Label>
          <RadioGroup
            onValueChange={(value) => handleChange("topic", value)}
            value={formData.topic}
            className="grid md:grid-cols-3 grid-cols-2 gap-3"
          >
            {["collaborate", "project-discussion", "hiring"].map(
              (topic, index, arr) => (
                <Label
                  key={topic}
                  htmlFor={topic}
                  className={`cursor-pointer rounded-xl border-2 p-4 flex flex-col items-start justify-center transition hover:border-primary 
        ${
          formData.topic === topic
            ? "border-primary bg-primary/10"
            : "border-foreground/20"
        }
        ${
          index === arr.length - 1 ? "col-span-2 md:col-span-1" : ""
        }  // ✅ full width only on small screens
      `}
                >
                  <RadioGroupItem
                    value={topic}
                    id={topic}
                    className="sr-only"
                  />
                  <span className="font-medium text-foreground capitalize">
                    {topic === "collaborate"
                      ? "Collaborate"
                      : topic === "project-discussion"
                      ? "Project Discussion"
                      : "Hiring"}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {topic === "collaborate"
                      ? "Work together on a creative or technical project."
                      : topic === "project-discussion"
                      ? "Discuss your project details with our team."
                      : "Looking for a role or position."}
                  </span>
                </Label>
              )
            )}
          </RadioGroup>
          {errors.topic && (
            <p className="text-xs text-primary">{errors.topic}</p>
          )}
        </div>

        {/* ✅ Message Field */}
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="message">Your Message</Label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`min-h-[100px] ${
                errors.message ? "border-primary" : ""
              }`}
            />
            {errors.message && (
              <p className="text-xs text-primary">{errors.message}</p>
            )}
          </div>
        </div>

        {/* Footer */}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? <Spinner /> : sendButton || "Send"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
