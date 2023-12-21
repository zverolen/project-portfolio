import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../button/Button'

export default function Disclosure({ children }) {
  const [ isExpanded, setIsExpanded ] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      {isExpanded && children}
      <Button isExpanded={isExpanded} handleClick={handleExpand} />
    </>
  )
}

Disclosure.propTypes = {
  children: PropTypes.element
}