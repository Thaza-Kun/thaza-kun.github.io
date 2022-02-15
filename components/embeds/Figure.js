import React from 'react'
import _ from 'lodash'
import CustomLink from '../Link'
import Image from 'next/image'

export default function Figure({ license, src, link, viewport, width, height, children }) {
  const size = viewport ? `${viewport}vw` : '100vw'
  const padding = viewport ? `py-[${1024 - (viewport / 100) * 1024}px]` : 'py-auto'
  return (
    <figure className={`${padding} flex flex-col justify-center`}>
      <Image
        className="mx-auto"
        src={src}
        width={width}
        height={height}
        layout="responsive"
        sizes={size}
      />
      <figcaption className="text-center">
        <p>
          {children && children}{' '}
          {license && `(Lesen ${(<CustomLink href={link}>{license}</CustomLink>)})`}
        </p>
      </figcaption>
    </figure>
  )
}
