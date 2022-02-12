import React from 'react'

export default function problem(props) {
  return (
    <div className="mx-2 my-6 rounded border border-teal-600 bg-teal-100 p-4">
      <span className="text-xl font-semibold uppercase text-teal-800">
        Problem {props.name ? '- ' + props.name : ''}:
      </span>
      <span className="block py-4 pl-4 text-lg text-teal-700">
        <span className="font-semibold">Instance -</span> {props.instance}
      </span>
      <span className="block pl-4 text-lg text-teal-700">
        <span className="font-semibold">Question -</span> {props.question}
      </span>
    </div>
  )
}
