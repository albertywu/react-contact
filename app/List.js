import React, {Component} from 'react'
import Card from './Card'

class List extends Component {
  render() {

    const cards = this.props.cards.map(c => {
      return (
        <Card 
          key={c.id} 
          title={c.title} 
          description={c.description} 
          tasks={c.tasks}
          />
      )
    })

    return (
      <ul>
        {cards}
      </ul>
    )
  }
}

export default List