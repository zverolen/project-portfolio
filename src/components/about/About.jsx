import { about } from "../../data/copy"

export default function About() {
  return (
    <section className="about">
      <div>
          <h2>{about.heading}</h2>
        </div>
      <div>
        <img src="./../../images/portrait.png"/>
        <p>{about.p1}</p>
        <p>{about.p2}</p>
        <p>{about.p3}</p>
      </div>
    </section>
  )
}