import { useState } from 'react'
import React from 'react'

export default function Example(props) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="mx-2 my-6 rounded border border-gray-400 p-4">
      <div className="flex">
        <button
          className="mr-4 inline-block"
          onClick={() => setToggle(!toggle)}
          aria-label="Expand"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 stroke-current text-gray-600 hover:text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l4-4 4 4m0 6l-4 4-4-4"
            />
          </svg>
        </button>
        <div className="flex w-full flex-col text-xl font-semibold leading-none text-black sm:block">
          <span className="inline-block">Example</span>
          {props.title && (
            <span className="float-right inline-block text-base text-gray-600 sm:text-lg ">
              {props.title}
            </span>
          )}
        </div>
      </div>
      <div className={!toggle && 'hidden'}>{props.children}</div>
    </div>
  )
}
