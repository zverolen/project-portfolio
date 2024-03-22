import PropTypes from 'prop-types'
import { useState } from 'react'
import Button from '../button/Button'

export default function Disclosure({ children, projectName }) {
  const [ isExpanded, setIsExpanded ] = useState(false);

  function handleExpand() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <div>
        <h3>{projectName}</h3>
        <Button isExpanded={isExpanded} handleClick={handleExpand} />
      </div>
       
        {isExpanded && children} 
    </>
  )
}

Disclosure.propTypes = {
  children: PropTypes.element,
  projectName: PropTypes.string
}