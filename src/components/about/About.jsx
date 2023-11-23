import { about } from "../../data/copy"

export default function About() {
  return (
    <section>
      <h2>{about.heading}</h2>
      <p>{about.p1}</p>
      <p>{about.p2}</p>
      <p>{about.p3}</p>
    </section>
  )
}