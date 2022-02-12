import React from 'react'

export default function corollary(props) {
  return (
    <div className="mx-2 my-6 rounded border border-orange-400 bg-orange-100 p-4">
      <span className="block text-2xl font-semibold text-orange-600">
        Corollary {props.name ? '- ' + props.name : ''}
      </span>
      <div>{props.children}</div>
    </div>
  )
}
