import React from 'react'

export default function important(props) {
  return (
    <div className="mx-2 my-6 rounded border border-red-700 bg-red-200 p-4">
      <span className="block text-xl font-semibold uppercase leading-tight text-red-800">
        Important
      </span>
      <div className="text-black">{props.children}</div>
    </div>
  )
}
