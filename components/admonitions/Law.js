import React from 'react'
import _ from 'lodash'

export default function Law(props) {
  const name = _.get(props, 'name')

  return (
    <div className="mx-2 my-6 rounded border border-gray-400 p-4 pb-3">
      <span className="block text-2xl font-semibold text-black dark:text-white">{`Hukum ${name}`}</span>
      <div>{props.children}</div>
    </div>
  )
}
