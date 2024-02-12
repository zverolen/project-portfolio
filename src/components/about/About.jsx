import { about } from "../../data/copy"

export default function About() {
  return (
    <section className="about site-frame full-background">
      <h2 className="site-frame full-background">{about.heading}</h2>
      <div>
        <img 
          src="./../../images/portrait-100.jpg"
          sizes="(min-width: calc(1000 / 16 * 1rem)) 12.5rem,
                 (min-width: calc(501 / 16 * 1rem)) 20vw,
                 6.25rem"
          srcSet="./../../images/portrait-100.jpg 100w,
                  ./../../images/portrait-160.jpg 160w,
                  ./../../images/portrait-240.jpg 240w,
                  ./../../images/portrait-400.jpg 400w,
                  ./../../images/portrait-600.jpg 600w"
          alt="My smiling photo"
        />
        <p>{about.p1}</p>
        <p>{about.p2}</p>
        <p>{about.p3}</p>
      </div>
    </section>
  )
}