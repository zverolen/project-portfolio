export const skills = {
  primary: ['JS', 'React', 'Redux', 'Typescript', 'HTML', 'Modern CSS', 'Git', 'Accessibility', 'Responsive Images'],
  // primary: ['JS', 'React', 'HTML', 'Modern CSS', 'SASS', 'Git', 'Accessibility', 'Responsive Images', 'Automated Testing'],
  secondary: ['Sass', 'UX/UI', 'Figma/Penpot', 'Intrinsic Web Design', 'Inkscape', 'Automated Testing']
}

export const projects = {
  heading: 'Projects',
  note: 'NOTE: All websites are tested with screen readers and are evaluated against WCAG 2.2 criteria. They are operable via keyboard and designed to be usable across various screen sizes and orientations. The color contrast ratio meets or exceeds the AA level requirements. Some images and all copy created by me. All sites have light and dark color themes (except for the Night Flight site with colors appropriate for both themes). Created using Vite.',
  projects: [
    {
      id: 1,
      name: 'Race Dashboard',
      imageToken: 'dashboard',
      description: 'A React/Redux app for go-kart races (mobile version). It helps team managers make strategic decisions based on the number of metrics and calculations displayed in real time.',
      features: [
        'Provides and constantly updates race metrics like best lap time, time in session, interval after the leader, and other',
        'TypeScript (React/Redux), Redux SignalR middelware, CSS Modules',
        'Design tokens via CSS custom properties',
        'Designed in Figma',
        'Icons created in Inkscape'
      ],
      linkGithubText: 'Go to the app repository on Github',
      linkGithubHref: 'https://github.com/zverolen/dashboard-demo'
    },
    {
      id: 2,
      name: 'Learning app',
      imageToken: 'vocab',
      description: 'A React app that helps to study Serbian language (stage 1). It allows to practice translating phrases from Russian into Serbian and to check the result. Currently the project is at the early stage and is waiting for the redesign and adding more sophisticated functionality.',
      features: [
        'Uses two langauges: Russian and Serbian',
        'JS (React), CSS',
        'No breakpoints (only a few container queries)',
        'Designed in the browser and Penpot',
        'Icons created in Inkscape',
        'Component and End-to-End tests using Cypress'
      ],
      linkGithubText: 'Go to the app repository on Github',
      linkGithubHref: 'https://github.com/zverolen/vocab-srpski',
      linkBrowserText: 'Open the app in browser',
      linkBrowserHref: '/znaju/znaju'
    },
    {
      id: 3,
      name: 'My Portfolio Website',
      imageToken: 'portfolio',
      description: 'A website to showcase my projects. Most accurately demonstrates my skills and my approach. The design goal was to provide the viewer with content in the least time-consuming way. The development goal was to create a modern website using some React for an interactive component.',
      features: [
        'HTML, CSS and JS (React)',
        'No breakpoints',
        'Designed in Figma using design tokens',
        'Images created in Figma',
        'Social icons from the Figma community resources'
      ],
      linkGithubText: 'Go to the portfolio repository on Github',
      linkGithubHref: 'https://github.com/zverolen/project-portfolio',
      linkBrowserText: '',
      linkBrowserHref: ''
    },
    {
      id: 4,
      name: 'Non-alco beer brewery',
      imageToken: 'o2',
      description: 'A website for a non-alcoholic craft beer brewery O2. It was created as a part of a Codecademy course project. The assignment was to make a responsive website for a company using Flexbox.',
      features: [
        'HTML and CSS',
        'Designed in browser',
        'The hero image was created in Figma'
      ],
      linkGithubText: 'Go to the brewery project on Github',
      linkGithubHref: 'https://github.com/zverolen/project-business-site',
      linkBrowserText: 'Open the brewery site in browser',
      linkBrowserHref: '/o2/o2'
    },
    {
      id: 5,
      name: 'Local vampire club',
      imageToken: 'flight',
      description: 'This is a website for Night Flight - a local club for Sydney vampires who turn into bats and fly together. It was developed as a project for a Codecademy course. The assignment was to create a responsive website for a local club, utilizing flexible design principles without fixed values. The site features a simulated form submission widget (React).',
      features: [
        'HTML, CSS and JS',
        'Designed in browser',
        'Images created in Figma, Inkscape and Photoshop',
        'The images of bats are AI-generated'
      ],
      linkGithubText: 'Go to the Night Flight project on Github',
      linkGithubHref: 'https://github.com/zverolen/project-local-club',
      linkBrowserText: 'Open the Night Flight site in browser',
      linkBrowserHref: '/night-flight/night-flight'
    }
  ]
}

export const about = {
  heading: 'About me',
  p1: "Hello! I am a self-taught frontend web developer based in Belgrade, Serbia, specializing in CSS, HTML, and React. I also use Cypress for component and end-to-end testing. In addition to these technical skills, I'm interested in UX/UI design, which I pursue as a hobby.",
  p2: "Accessibility is my top priority, and I put a lot of effort into making my websites fully responsive, including responsive images, to guarantee reliable work across various devices.  I'm a believer in intrinsic design and a big fan of modern CSSand I am trying to include such techniques in my projects as much as possible.",
  p3: "My skills and approach are best represented by the projects in my portfolio."
}

export const contact = {
  heading: "Contact:",
  tg: "https://t.me/zverolen",
  email: "mailto:zverolen@gmail.com",
  linkedin: "https://www.linkedin.com/in/elena-zvereva-722b3177",
  github: "https://github.com/zverolen"
}