import { about } from "../../data/copy"

export default function About() {
  return (
    <section className="about">
      <div>
          <h2 className="site-frame">{about.heading}</h2>
        </div>
      <div className="site-frame">
        <img src="./../../images/portrait.png"/>
        <p>{about.p1}</p>
        <p>{about.p2}</p>
        <p>{about.p3}</p>
      </div>
    </section>
  )
}