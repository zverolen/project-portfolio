import { skills } from "../../data/copy"

export default function Skills() {
  const primarySkills = skills.primary.map((skill, index) => <li key={index}>{`${skill}${index !== skills.primary.length - 1 ? ',' : ''}`}</li>)
  const secondarySkills = skills.secondary.map((skill, index) => <li key={index}>{`${skill}${index !== skills.secondary.length - 1 ? ',' : ''}`}</li>)
  
  return (
    <section className="skills site-frame full-background">
      <div><h2>Skills and approach</h2></div>
      <ul role="list" aria-label="Primary Skills">
        {primarySkills}
      </ul>
      <ul role="list" aria-label="Secondary Skills">
        {secondarySkills}
      </ul>
    </section>
  )
}