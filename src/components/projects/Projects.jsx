import { projects } from "../../data/copy"
import Project from "./Project"


export default function Projects() {
  const projectMapped = projects.projects.map(project => <Project key={project.id} project={project} />)
  return (
    <section className="projects">
      <h2 className="site-frame full-background">{projects.heading}</h2>
      <p className="site-frame">{projects.note}</p>
      <ul className="site-frame" role="list">
        {projectMapped}
      </ul>
    </section>
  )
}