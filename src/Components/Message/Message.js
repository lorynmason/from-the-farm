import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../../actions';

export const Message = ({ message, addMessage}) => {
  setTimeout(() => {
    addMessage('')
  }, 5000);

  if(message) {
    return (
      <div className="message-container">
        <p>
          {message}
        </p>
      </div>
    )
  }
  return (
    <div className="blah">

    </div>
  )
}

export const mapStateToProps = (state) => ({
  message: state.message
});

export const mapDispatchToProps = (dispatch) => ({
  addMessage: (message) => dispatch(addMessage(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(Message);