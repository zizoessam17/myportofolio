import { profile } from "../data";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-16 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-lg text-base-content/70">Hi, I'm</p>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-2xl font-semibold text-primary">
            {profile.role}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-base-content/80">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              See my projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in touch
            </a>
          </div>
        </div>

        <div className="mockup-code w-full shadow-lg">
          <pre data-prefix="1">
            <code>const ziad = {"{"}</code>
          </pre>
          <pre data-prefix="2">
            <code>  stack: ["MongoDB", "Express", "React", "Node"],</code>
          </pre>
          <pre data-prefix="3">
            <code>  languages: ["Arabic", "English"],</code>
          </pre>
          <pre data-prefix="4">
            <code>  learning: "Node.js + Express",</code>
          </pre>
          <pre data-prefix="5" className="bg-success text-success-content">
            <code>  openToWork: true,</code>
          </pre>
          <pre data-prefix="6">
            <code>{"}"};</code>
          </pre>
        </div>
      </div>
    </section>
  );
}