import { useState } from "react";
import { profile } from "../data";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Opens the visitor's email app with the message filled in.
  const handleSend = () => {
    const subject = encodeURIComponent(
      `Portfolio message from ${name || "a visitor"}`,
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's work together
          </h2>
          <p className="mt-4 max-w-md text-lg text-base-content/80">
            Have a project or a role in mind? Send me a message and I'll get
            back to you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-outline justify-start"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline justify-start"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline justify-start"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
