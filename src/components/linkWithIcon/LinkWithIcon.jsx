import PropTypes from 'prop-types'

export default function LinkWithIcon({ linkHref, children, linkLabel }) {
  return (
    <a 
      href={linkHref}
      aria-label={linkLabel}
      >
      {children}
    </a>
  )
}

LinkWithIcon.propTypes ={
  linkHref: PropTypes.string.isRequired,
  children: PropTypes.element,
  linkLabel: PropTypes.string.isRequired
}