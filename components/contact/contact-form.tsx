"use client";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { FormEvent, useState } from "react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setError("Please fill in your name and a message.");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError(null);

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="focus-ring mt-2 w-full rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm"
            autoComplete="email"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="focus-ring mt-2 w-full resize-none rounded-lg border border-border bg-transparent px-3.5 py-2.5 text-sm"
        />
      </div>

      {error ? <p className="text-sm text-red-500">{error}</p> : null}
      {sent ? (
        <p className="text-sm text-muted-foreground">
          Your email client should have opened with this message pre-filled —
          send it from there.
        </p>
      ) : null}

      <div>
        <Button type="submit">Send message</Button>
      </div>
    </form>
  );
}
