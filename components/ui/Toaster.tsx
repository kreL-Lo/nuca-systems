"use client";

import * as Toast from "@radix-ui/react-toast";
import { createContext, useCallback, useContext, useState } from "react";

type ToastType = "success" | "error";
type ToastContextValue = (type: ToastType, message: string) => void;

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within Toaster");
  return ctx;
}

export function Toaster({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<ToastType>("success");
  const [message, setMessage] = useState("");

  const toast = useCallback((t: ToastType, msg: string) => {
    setType(t);
    setMessage(msg);
    setOpen(true);
  }, []);

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          open={open}
          onOpenChange={setOpen}
          className="fixed bottom-4 right-4 z-[9999] rounded-lg px-4 py-3 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out"
        >
          <Toast.Title className="font-outfit font-semibold text-sm">
            {type === "success" ? "Message sent" : "Error"}
          </Toast.Title>
          <Toast.Description className="text-sm opacity-90">
            {message}
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </ToastContext.Provider>
  );
}
