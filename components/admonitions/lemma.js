import React from 'react'

export default function lemma(props) {
  return (
    <div className="mx-2 my-6 rounded border border-green-400 bg-green-100 p-4">
      <span className="block text-2xl font-semibold text-green-600">Lemma</span>
      <div>{props.children}</div>
    </div>
  )
}
