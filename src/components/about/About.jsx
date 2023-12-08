import { about } from "../../data/copy"

export default function About() {
  return (
    <section className="about">
      <h2>{about.heading}</h2>
      <img src="./../../images/portrait.png"/>
      <p>{about.p1}</p>
      <p>{about.p2}</p>
      <p>{about.p3}</p>
    </section>
  )
}