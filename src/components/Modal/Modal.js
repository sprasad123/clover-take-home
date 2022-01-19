import React, {useEffect} from "react";
import "./Modal.css";
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

const Modal = ({onCloseClick, ...props}) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onCloseClick()
      }
    }

    // Prevent scolling
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible'
      document.removeEventListener('keydown', onKeyDown)
    }
  })

    // Create Modal with text contents from ModalTile
	return ReactDOM.createPortal(
	  <React.Fragment>
		<div className="modalBackground"
        onClick={onCloseClick}
        onKeyPress={onCloseClick}
        role="button"
        tabIndex="-1"
      ></div>
	  <div className="modalContainer">
                 <div className="titleCloseBtn">
   				{props.children}
			  </div>
			  </div>
		  </React.Fragment>,
    document.querySelector('#modal-root')
  )
}

Modal.propTypes = {
  onCloseClick: PropTypes.func,

}

export default Modal
