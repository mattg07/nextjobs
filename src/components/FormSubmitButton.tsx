"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function FormSubmitButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { pending } = useFormStatus();
  return (
    <Button
      {...props}
      type="submit"
      disabled={props.disabled || pending}
      className="w-full"
    >
      <span className="flex items-center text-white justify-center gap-1">
        {pending && <Loader2 size={16} className="animate-spin "/>}
        {props.children}
      </span>
    </Button>
  );
}