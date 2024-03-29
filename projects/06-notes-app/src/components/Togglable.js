import { useState, forwardRef, useImperativeHandle } from "react"
import PropTypes from 'prop-types'
import i18n from "../i18n"

const Togglable = forwardRef(({children, buttonLabel}, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : ''}
  const showWhenVisible = { display: visible ? '' : 'none'}

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return(
      toggleVisibility
    )
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(true)}>{buttonLabel}</button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <button onClick={() => setVisible(false)}>{i18n.TOGGABLE.CANCEL_BUTTON}</button>
      </div>
    </div>
  )
})

export default Togglable

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel : PropTypes.string.isRequired
}