import PropTypes from 'prop-types'
import Disclosure from '../disclosure/Disclosure';

const svg = <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div aria-live="polite">
        <div>
          <img 
                src={`./${project.imageToken}-mock-210.png`}
                sizes="(min-width: calc(1344 / 16 * 1rem)) 75.5rem,
                      (min-width: calc(976 / 16 * 1rem)) 52.625rem,
                      (min-width: calc(761 / 16 * 1rem)) 40rem,
                      13.125rem"
                srcSet={`./images/${project.imageToken}-mock-210.png 210w,
                        ./images/${project.imageToken}-mock-842.png 842w,
                        ./images/${project.imageToken}-mock-640.png 640w,
                        ./images/${project.imageToken}-mock-1237.png 1237w,
                        ./images/${project.imageToken}-mock-1612.png 1612w,
                        ./images/${project.imageToken}-mock-1800.png 1800w,
                        ./images/${project.imageToken}-mock-2012.png 2012w,
                        ./images/${project.imageToken}-mock-2424.png 2424w`}
                alt={`A computer and a smartphone with open project ${project.name}`}
              />
            {/* <img 
              src={`./${project.imageToken}-mock-210.png`}
              sizes="(min-width: calc(1462 / 16 * 1rem)) 75.75rem,
                     (min-width: calc(1300 / 16 * 1rem)) 73.875rem,
                     (min-width: calc(1100 / 16 * 1rem)) 61.5rem,
                     (min-width: calc(900 / 16 * 1rem)) 49rem,
                     (min-width: calc(600 / 16 * 1rem)) 31.5625rem,
                     (min-width: calc(500 / 16 * 1rem)) 25.875rem,
                     (min-width: calc(335 / 16 * 1rem)) 20.9375rem,
                     (min-width: calc(298 / 16 * 1rem)) 18.625rem,
                     17.5rem"
              srcSet={`./images/${project.imageToken}-mock-210.png 210w,
                      ./images/${project.imageToken}-mock-298.png 298w,
                      ./images/${project.imageToken}-mock-335.png 335w,
                      ./images/${project.imageToken}-mock-420.png 420w,
                      ./images/${project.imageToken}-mock-505.png 505w,
                      ./images/${project.imageToken}-mock-596.png 596w,
                      ./images/${project.imageToken}-mock-670.png 670w,
                      ./images/${project.imageToken}-mock-784.png 784w,
                      ./images/${project.imageToken}-mock-984.png 984w,
                      ./images/${project.imageToken}-mock-1010.png 1010w,
                      ./images/${project.imageToken}-mock-1182.png 1182w,
                      ./images/${project.imageToken}-mock-1212.png 1212w,
                      ./images/${project.imageToken}-mock-1568.png 1568w,
                      ./images/${project.imageToken}-mock-1968.png 1968w,
                      ./images/${project.imageToken}-mock-2364.png 2364w,
                      ./images/${project.imageToken}-mock-2424.png 2430w`}
              alt={`A computer and a smartphone with views of the project ${project.name}`}
            /> */}
            <div>
              <h4 aria-label={`Description of the ${project.name} project`}>Description</h4>
              <p>{project.description}</p>
            </div>
            <div>
              <h4 aria-label={`Features of the ${project.name} project`}>Features</h4>
              <ul>
                {project.features.map((feature, index) => <li key={index}><span>{svg}</span><span>{feature}</span></li>)}
              </ul>
            </div>
            <div>
              {project.linkBrowserText && <a href={project.linkBrowserHref}>{project.linkBrowserText}</a>}
              <a href={project.linkGithubHref}>{project.linkGithubText}</a>
            </div>
          </div>
        </div>  
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