import React, {Component} from 'react'

class Task extends Component {
  render() {
    return (
      <div>
        <span className="taskName">{this.props.name}</span>
        <input type="checkbox" defaultChecked={this.props.done} />
      </div>
    )
  }
}

export default Task