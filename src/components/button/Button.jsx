import PropTypes from 'prop-types'

export default function Button({isExpanded}) {
  return (
    <button>
      {isExpanded ? 'Close' : 'View'}
    </button>
  )
}

Button.propTypes = {
  isExpanded: PropTypes.bool
}