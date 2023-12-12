import { projects } from "../../data/copy"
import Project from "./Project"


export default function Projects() {
  const projectMapped = projects.projects.map(project => <Project key={project.id} project={project} />)
  return (
    <section className="projects">
      <div>
        <h2>{projects.heading}</h2>
      </div>
      <p>{projects.note}</p>
      <ul role="list">
        {projectMapped}
      </ul>
    </section>
  )
}