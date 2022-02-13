import React from 'react'
import _ from 'lodash'

export default function MetaPost(props) {
  return (
    <div className="prose mx-2 my-6 max-w-none rounded-lg border-4 border-blue-600 p-4 dark:prose-dark">
      <div>{props.children}</div>
    </div>
  )
}
