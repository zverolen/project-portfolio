import PropTypes from 'prop-types'

export default function Button({ isExpanded, handleClick }) {
  return (
    <button onClick={handleClick} aria-expanded={isExpanded} >
      {isExpanded ? 'Close' : 'View'}
    </button>
  )
}

Button.propTypes = {
  isExpanded: PropTypes.bool,
  handleClick: PropTypes.func
}