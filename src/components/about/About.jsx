import { about } from "../../data/copy"

export default function About() {
  return (
    <section className="about">
      <div>
          <h2 className="site-frame">{about.heading}</h2>
        </div>
      <div className="site-frame">
        <img 
          src="./../../images/portrait-100.jpg"
          sizes="(min-width: 100px) 200px,
                 (min-width: 501px) 20vw,
                 100px"
          srcSet="./../../images/portrait-100.jpg 100w,
                  ./../../images/portrait-160.jpg 160w,
                  ./../../images/portrait-240.jpg 240w,
                  ./../../images/portrait-400.jpg 400w,
                  ./../../images/portrait-600.jpg 600w"
                  // srcSet="./../../images/portrait-100.jpg 100w,
                  // ./../../images/portrait-160.jpg 160w,
                  // ./../../images/portrait-240.jpg 240w,
                  // ./../../images/portrait-600.jpg 600w"
          alt="My smiling photo"
        />
        <p>{about.p1}</p>
        <p>{about.p2}</p>
        <p>{about.p3}</p>
      </div>
    </section>
  )
}