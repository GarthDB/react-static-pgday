import React from 'react'
import { speakers } from '../../data'
import { Link } from 'react-router'

export default class Index extends React.Component {
  render() {
    return (
      <main>
        <h1>Index component</h1>
        <ul>
          {speakers.map(speaker =>
            <li><Link key={speaker.id} to={"/speaker/"+speaker.slug}>{speaker.name}</Link></li>
          )}
        </ul>
      </main>
    )
  }
}
