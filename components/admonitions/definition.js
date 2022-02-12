import React from 'react'

export default function definition(props) {
  return (
    <div className="mx-2 my-6 rounded border border-gray-400 p-4">
      <span className="block text-2xl font-semibold text-black">{props.name}</span>
      <div>{props.children}</div>
    </div>
  )
}
