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

export function DialogBox({
  openButtonTitle,
  sendButton,
  contentHeading,
  content,
}) {
  const [email, setEmail] = useState("");
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
              Enter email and click send to send this email body.
            </DialogDescription>
          </DialogHeader>
          <div>
            <DialogDescription>
              {/* <span className="text-foreground">{contentHeading}</span>{" "} */}
              {content}
              <p>{email}</p>
            </DialogDescription>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="email-1">Email</Label>
              <Input
                id="email-1"
                name="email"
                placeholder={"Enter your email"}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
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
