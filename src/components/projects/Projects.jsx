import { projects } from "../../data/copy"
import Project from "./Project"


export default function Projects() {
  const projectMapped = projects.projects.map(project => <Project key={project.id} project={project} />)
  return (
    <section>
      <h2>{projects.heading}</h2>
      <p>{projects.note}</p>
      <div>
        {projectMapped}
      </div>
    </section>
  )
}