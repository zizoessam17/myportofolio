import { skillGroups } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
      <p className="mt-3 text-base-content/70">
        Outlined badges are what I'm still learning.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="card border border-base-300 bg-base-100">
            <div className="card-body">
              <h3 className="card-title">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`badge badge-lg ${
                      skill.learning ? "badge-outline" : "badge-primary"
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}