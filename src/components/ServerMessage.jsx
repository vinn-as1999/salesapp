import React from 'react'

function ServerMessage(props) {
  return (
    <div className={props.error ? 'server-message error' : 'server-message'}>
      {props.message}
    </div>
  )
}

export default ServerMessage