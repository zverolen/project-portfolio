export const skills = {
  primary: ['HTML', 'Modern CSS', 'SASS', 'JS', 'React', 'Git', 'Accessibility', 'Responsive Images', 'Automated Testing'],
  secondary: ['UX/UI', 'Figma/Penpot', 'Intrinsic Web Design', 'Photoshop', 'Inkscape']
}

export const projects = {
  heading: 'Projects',
  note: 'NOTE: All websites are tested using screen readers and against WCAG 2.2 creteria; they are operable by keyboard and are usable regardless screen size and orientation, and the color contrast ratio is at least at the level AA. Some images and all copy created by me. Almost all projects use light and dark color themes. Created using Vite.',
  projects: [
    {
      id: 1,
      name: 'Learning app',
      imageToken: 'business-site-demo',
      description: 'A React app that helps to study Serbian language. It allows to practice translating phrases from Russian into Serbian and to check the result. Currently the project is at the early stage and is waiting for the redesign and adding more sophisticated functionality.',
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
      linkBrowserHref: ''
    },
    {
      id: 2,
      name: 'My Portfolio Website',
      imageToken: 'business-site-demo',
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
      imageToken: 'business-site-demo',
      description: 'A website for a non-alcoholic craft beer brewery O2. It was created as a part of a Codecademy course project. The assignment was to make a responsive website for a company using Flexbox.',
      features: [
        'HTML and CSS',
        'Designed in browser',
        'The hero image was created in Figma'
      ],
      linkGithubText: 'Go to the brewery project on Github',
      linkGithubHref: 'https://github.com/zverolen/project-business-site',
      linkBrowserText: 'Open the brewery site in browser',
      linkBrowserHref: ''
    },
    {
      id: 3,
      name: 'Local vampire club',
      imageToken: 'business-site-demo',
      description: 'This is a website for Night Flight - a local club for Sydney vampires who turn into bats and fly together. It was developed as a project for a Codecademy course. The assignment was to create a responsive website for a local club, utilizing flexible design principles without fixed values. The site features a simulated form submission widget (React).',
      features: [
        'HTML, SASS and JS',
        'Designed in browser',
        'Images created in Figma, Inkscape and Photoshop',
        'The images of bats are AI-generated'
      ],
      linkGithubText: 'Go to the Night Flight project on Github',
      linkGithubHref: 'https://github.com/zverolen/project-local-club',
      linkBrowserText: 'Open the Night Flight site in browser',
      linkBrowserHref: ''
    }
  ]
}

export const about = {
  heading: 'About me',
  p1: "Hello! I'm a self-taught frontend web developer based in Barcelona, Spain. I primarily work with CSS and HTML with Vanilla Javascript to provide user interactions. I'm also familiar with UX/UI design and consider it to be my hobby.",
  p2: "My main priority is accessibility. I also pay a lot of attention to responsive images and other ways to make my websites works on any devices. My technical approach includes creating levels of abstraction with SASS and using modern CSS techniques.",
  p3: "My work is best described with the projects in my portfolio."
}

export const contact = {
  heading: "Contact:",
  tg: "t.me/zverolen",
  email: "zverolen@gmail.com"
}