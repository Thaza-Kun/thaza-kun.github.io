import React from 'react'
import _ from 'lodash'

// Force commit rename

export default class YouTube extends React.Component {
  render() {
    const id = _.get(this.props, 'id')
    const options = {
      height: 390,
      width: 640,
      playerVars: {
        autoplay: 1,
      },
    }
    return (
      <div>
        <iframe
          width="100%"
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }
  _onReady(event) {
    event.target.pauseVideo()
  }
}
