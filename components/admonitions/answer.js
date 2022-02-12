import React from 'react'

export default function Answer(props) {
  return (
    <div>
      <span className="block text-xl italic">Answer</span>
      {props.children}
    </div>
  )
}
