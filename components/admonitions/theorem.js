import React from 'react'

function Theorem(props) {
  return (
    <div className="mx-2 rounded bg-gradient-to-r from-orange-300 via-green-300 to-purple-300 bg-clip-border py-2">
      <div className="mx-2 bg-white p-4">
        <span className="mx-2 block text-2xl font-semibold text-black">
          Theorem {props.name ? '- ' + props.name : ''}
        </span>
        <div className="mx-2 italic">{props.children}</div>
      </div>
    </div>
  )
}

export default Theorem
