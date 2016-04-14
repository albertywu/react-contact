import React, {Component} from 'react'
import Checklist from './Checklist'

class Card extends Component {
  render() {
    return (
      <div>
        <h1>{ this.props.title }</h1>
        <h2>{ this.props.description }</h2>
        <Checklist tasks={this.props.tasks} />
      </div>
    )
  }
}

export default Card