import React from 'react'
import _ from 'lodash'

export default function MetaPost(props) {
  return (
    <aside className="prose mx-2 my-6 max-w-none rounded-lg border-4 border-teal-600 px-4 dark:prose-dark">
      <div>{props.children}</div>
    </aside>
  )
}
