import React from 'react'
import _ from 'lodash'

// Force commit rename

export default function MetaPost(props) {
  return (
    <div className="group prose relative my-4 max-w-none rounded-lg dark:prose-dark">
      {/* <div className="rounded-lg bg-gradient-to-b from-green-600 to-green-300 bg-clip-border py-2"> */}
      <div className="rounded-2xl rounded-l-none border-l-8 border-green-500 bg-gray-200 py-0.5 px-4 dark:bg-gray-800">
        {props.children}
      </div>
      {/* </div> */}
    </div>
  )
}
