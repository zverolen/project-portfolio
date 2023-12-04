export const skills = {
  primary: ['HTML', 'Modern CSS', 'SASS', 'JS', 'React', 'Git', 'Accessibility', 'Responsive Images'],
  secondary: ['UX/UI', 'Figma/Penpot', 'Intrinsic Web Design', 'Photoshop']
}

export const projects = {
  heading: 'Projects',
  note: 'NOTE: all websites are screen readers friendly, mobile-ready, use responsive images and are tested agains different accessibility concerns.',
  projects: [
    {
      id: 1,
      name: 'My Portfolio Website',
      imageToken: 'nf-mock',
      description: 'A website to showcase my project. Most accurately demonstrates my skills and my approach. The design goal was to provide the viewer with content in the least time-consuming way. The development goal was to get as close to the single source of truth concept as possible.',
      features: [
        'HTML, SASS and JS',
        'Doesn\'t use breakpoints',
        'Designed in Figma using design tokens',
        'Images created in Photoshop',
        'Social icons taken from the Figma community resources'
      ],
      linkGithubText: 'Go to the portfolio repository on Github',
      linkGithubHref: '',
      linkBrowserText: '',
      linkBrowserHref: ''
    },
    {
      id: 2,
      name: 'Local vampire club',
      imageToken: 'nf-mock',
      description: 'This is a website for Night Flight - a local club for Sydney vampires who turn into bats and fly together. It was developed as a task on Codecademy. The goal was to create a responsive website for a local club of a choice. No fixed values should be used. I also included a small widget that imitates the form submision.',
      features: [
        'HTML, SASS and JS',
        'Designed in browser',
        'Images created in Figma, Inkscape and Photoshop.'
      ],
      linkGithubText: 'Go to the Night Flight project on Github',
      linkGithubHref: '',
      linkBrowserText: 'Open the Night Flight site in browser',
      linkBrowserHref: ''
    },
    {
      id: 3,
      name: 'Non-alco beer brewery',
      imageToken: 'nf-mock',
      description: 'A website for a non-alco craft beer brewery O2. It was also a part of a course on Codecademy. The task was to create a responsive website for a company using Flexbox.',
      features: [
        'HTML and CSS',
        'Designed in browser',
        'Images created in Figma'
      ],
      linkGithubText: 'Go to the brewery project on Github',
      linkGithubHref: '',
      linkBrowserText: 'Open the brewery site in browser',
      linkBrowserHref: ''
    },
  ]
}

export const about = {
  heading: 'About me',
  p1: "Hello! I'm a self-taught frontend web developer based in Barcelona, Spain. I primarily work with CSS and HTML with Vanilla Javascript to provide user interactions. I'm also familiar with UX/UI design and consider it to be my hobby.",
  p2: "My main priority is accessibility. I also pay a lot of attention to responsive images and other ways to make my websites works on any devices. My technical approach includes creating levels of abstraction with SASS and using modern CSS techniques.",
  p3: "My work is best described with the projects in my portfolio."
}

export const contact = {
  heading: "Contact me",
  tg: "t.me/zverolen",
  email: "zverolen@gmail.com"
}