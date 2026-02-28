"use client";

import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import { siteContent } from "@/content/siteContent";
import { useToast } from "@/components/ui/Toaster";

const interestOptions = siteContent.contact.form.interestOptions.filter(
  (o) => o.value !== ""
);

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const [interest, setInterest] = useState<string>("");
  const toast = useToast();
  const form = siteContent.contact.form;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const body = {
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company") || undefined,
      interest: interest || undefined,
      message: fd.get("message"),
      website: fd.get("website"),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (data.ok) {
        setStatus("done");
        formEl.reset();
        setInterest("");
        toast("success", "Your message has been sent.");
      } else {
        setError(data.error ?? "Something went wrong.");
        toast("error", data.error ?? "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
      toast("error", "Network error. Please try again.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block font-outfit text-sm font-medium text-gray-light mb-1.5">
            {form.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={form.namePlaceholder}
            className="w-full py-3 px-4 bg-navy border border-white/10 rounded-lg text-white font-dm-sans text-[0.95rem] outline-none transition-colors focus:border-blue"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-outfit text-sm font-medium text-gray-light mb-1.5">
            {form.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={form.emailPlaceholder}
            className="w-full py-3 px-4 bg-navy border border-white/10 rounded-lg text-white font-dm-sans text-[0.95rem] outline-none transition-colors focus:border-blue"
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="block font-outfit text-sm font-medium text-gray-light mb-1.5">
          {form.companyLabel}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder={form.companyPlaceholder}
          className="w-full py-3 px-4 bg-navy border border-white/10 rounded-lg text-white font-dm-sans text-[0.95rem] outline-none transition-colors focus:border-blue"
        />
      </div>
      <div>
        <label className="block font-outfit text-sm font-medium text-gray-light mb-1.5">
          {form.interestLabel}
        </label>
        <Select.Root value={interest} onValueChange={setInterest}>
          <Select.Trigger
            id="interest"
            className="w-full py-3 px-4 bg-navy border border-white/10 rounded-lg text-white font-dm-sans text-[0.95rem] outline-none transition-colors focus:border-blue flex items-center justify-between gap-2"
          >
            <Select.Value placeholder={form.interestPlaceholder} />
            <Select.Icon>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="text-gray opacity-80">
                <path d="M6 8L1 3h10z" />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Content
              position="popper"
              className="bg-navy-mid border border-white/10 rounded-lg overflow-hidden z-50"
            >
              {interestOptions.map((opt) => (
                <Select.Item
                  key={opt.value}
                  value={opt.value}
                  className="py-2 px-4 text-white cursor-pointer outline-none focus:bg-blue/20 data-[highlighted]:bg-blue/20"
                >
                  <Select.ItemText>{opt.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>
      <div>
        <label htmlFor="message" className="block font-outfit text-sm font-medium text-gray-light mb-1.5">
          {form.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={form.messagePlaceholder}
          className="w-full py-3 px-4 bg-navy border border-white/10 rounded-lg text-white font-dm-sans text-[0.95rem] outline-none transition-colors focus:border-blue resize-y min-h-[120px]"
        />
      </div>
      {error && <p className="text-red text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 px-7 rounded-lg font-outfit font-semibold text-base bg-blue text-navy-deep border-0 cursor-pointer transition-all duration-300 hover:bg-blue-bright hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none"
      >
        {status === "sending" ? "Sending…" : form.submitLabel}
      </button>
    </form>
  );
}
