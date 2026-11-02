import { projects, profile } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-base-200 py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="link link-primary"
          >
            See all on GitHub
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card bg-base-100 shadow">
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="text-base-content/70">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-ghost">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="card-actions mt-4 justify-end">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    View code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}