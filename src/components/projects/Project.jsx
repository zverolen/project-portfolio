import PropTypes from 'prop-types'


export default function Project({
  project
 }) {
  return(
    <div key={project.id}>
      <h3>{project.name}</h3>
      <h4>Description</h4>
      <p>{project.description}</p>
      <h4>Features</h4>
      <ul>
        {project.features.map((feature, index) => <li key={index}>{feature}</li>)}
      </ul>
      {project.linkBrowserText && <a href={project.linkBrowserHref}>{project.linkBrowserText}</a>}
      <a href={project.linkGithubHref}>{project.linkGithubText}</a>
    </div>
  )
 }

 Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string, 
    features: PropTypes.array,
    linkGithubText: PropTypes.string, 
    linkGithubHref: PropTypes.string,
    linkBrowserText: PropTypes.string,
    linkBrowserHref: PropTypes.string
  })
}