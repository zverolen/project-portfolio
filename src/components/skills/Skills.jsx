import { skills } from "../../data/copy"

export default function Skills() {
  const primarySkills = skills.primary.map((skill, index) => <li key={index}>{skill},</li>)
  const secondarySkills = skills.secondary.map((skill, index) => <li key={index}>{skill},</li>)
  
  return (
    <section className="skills">
      <div><h2>Skills and approach</h2></div>
      <ul className="site-frame" role="list">
        {primarySkills}
      </ul>
      <ul className="site-frame" role="list">
        {secondarySkills}
      </ul>
    </section>
  )
}