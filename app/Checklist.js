import React, {Component} from 'react'
import Task from './Task'

class Checklist extends Component {
  render() {
    alert(JSON.stringify(this.props))
    let tasks = this.props.tasks.map(t => {
      return (
        <Task 
          key={t.id}
          name={t.name}
          done={t.done}
        />
      )
    })

    return (
      <div>
        { tasks }
      </div>
    )
  }
}

export default Checklist