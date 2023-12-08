import { projects } from "../../data/copy"
import Project from "./Project"


export default function Projects() {
  const projectMapped = projects.projects.map(project => <Project key={project.id} project={project} />)
  return (
    <section className="projects">
      <h2>{projects.heading}</h2>
      <p>{projects.note}</p>
      <div>
        {projectMapped}
      </div>
    </section>
  )
}