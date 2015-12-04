import React from 'react'
import data from '../../data'

export default class Index extends React.Component {
  render() {
    let speaker = data.findSpeakerBySlug(this.props.params.slug)
    return (
      <main>
        <h1>{speaker.name}</h1>
      </main>
    )
  }
}
