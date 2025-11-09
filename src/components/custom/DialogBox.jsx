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
import { useState } from "react";

export function DialogBox({ openButtonTitle, sendButton }) {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    topic: "",
  });
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className={"rounded-full"} variant="outline">
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
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email-1">Full Name</Label>
              <Input
                id="email-1"
                name="email"
                placeholder={"Enter your name"}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                placeholder={"Enter your email"}
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email-1">Discussion Topic</Label>
              <Input id="email-1" name="email" placeholder={"Your topic"} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">{sendButton || "Send"}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
