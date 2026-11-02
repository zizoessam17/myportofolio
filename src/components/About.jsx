import { profile } from "../data";

export default function About() {
  return (
    <section id="about" className="bg-base-200 py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h2 className="text-3xl font-bold sm:text-4xl">About me</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg text-base-content/80">
            <p>
              I'm a MERN stack developer based between Cairo and Alexandria. I
              started with the front end, building interfaces with HTML, CSS and
              JavaScript, and I'm now expanding into the back end with Node.js
              and Express.js so I can build full applications from database to
              UI.
            </p>
            <p>
              I'm part of the Digital Egypt Pioneers Initiative (DEPI), where I
              learn through structured training and hands-on projects. I work
              comfortably in both Arabic and English.
            </p>
            <p>
              I care about clean code, practical solutions and clear
              communication.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow lg:col-span-2">
          <div className="card-body">
            <h3 className="card-title">Quick facts</h3>
            <ul className="mt-2 space-y-3">
              <li className="flex justify-between gap-4">
                <span className="text-base-content/60">Based in</span>
                <span className="text-right font-medium">{profile.location}</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-base-content/60">Program</span>
                <span className="text-right font-medium">DEPI</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-base-content/60">Languages</span>
                <span className="text-right font-medium">Arabic, English</span>
              </li>
              <li className="flex justify-between gap-4">
                <span className="text-base-content/60">Focus</span>
                <span className="text-right font-medium">MERN stack</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}