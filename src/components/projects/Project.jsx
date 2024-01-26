import PropTypes from 'prop-types'
import Disclosure from '../disclosure/Disclosure';
import Button from '../button/Button';

const svg = <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.541016" y="7.79956" width="14.0002" height="15.0146"></rect>
              <rect x="11.4033" y="14.967" width="16.0215" height="11.5686"></rect>
              <rect x="8.26465" y="1.62061" width="14.6494" height="17.804" strokeWidth="2"></rect>
            </svg>;

export default function Project({
  project
 }) {
  return(
    <li className="project" key={project.id}>
      <Disclosure projectName={project.name}>
        {/* <div aria-live="polite">
          <h3>{project.name}</h3> */}
          <div>
            <img 
              src={`./images/${project.imageToken}-501.png`}
              sizes="85vw"
              srcSet={`./images/${project.imageToken}-226.png 226w,
                      ./images/${project.imageToken}-501.png 501w,
                      ./images/${project.imageToken}-698.png 698w,
                      ./images/${project.imageToken}-857.png 857w,
                      ./images/${project.imageToken}-1143.png 1143w,
                      ./images/${project.imageToken}-1292.png 1292w,
                      ./images/${project.imageToken}-1593.png 1593w,
                      ./images/${project.imageToken}-1861.png 1861w,
                      ./images/${project.imageToken}-2430.png 2430w`}
              alt={`A computer and a smartphone with views of the project ${project.name}`}
            />
            <div>
              <h4>Description</h4>
              <p>{project.description}</p>
            </div>
            <div>
              <h4>Features</h4>
              <ul>
                {project.features.map((feature, index) => <li key={index}><span>{svg}</span><span>{feature}</span></li>)}
              </ul>
            </div>
            <div>
              {project.linkBrowserText && <a href={project.linkBrowserHref}>{project.linkBrowserText}</a>}
              <a href={project.linkGithubHref}>{project.linkGithubText}</a>
            </div>
          </div>
        {/* </div> */}
      </Disclosure>
      
    </li>
  )
 }

 Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageToken: PropTypes.string,
    description: PropTypes.string, 
    features: PropTypes.array,
    linkGithubText: PropTypes.string, 
    linkGithubHref: PropTypes.string,
    linkBrowserText: PropTypes.string,
    linkBrowserHref: PropTypes.string
  })
}