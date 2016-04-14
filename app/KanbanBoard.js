import React, {Component} from 'react';
import List from './List'

class KanbanBoard extends Component {
  render() {

    let todoCards = this.props.cards.filter(c => c.status === 'todo')
    let inProgressCards = this.props.cards.filter(c => c.status === 'in progress')
    let doneCards = this.props.cards.filter(c => c.status === 'done')

    let cards = this.props.cards
      .map(c => {
        return (
          <li key={c.id}>{c.title}</li>
        )
      })

    return (
      <div className="kanban-container">
        <List id='todoCards'
              title='To Do'
              cards={this.props.cards.filter(c => c.status === 'todo')}
        />
        <List id='inProgressCards'
              title='In Progress'
              cards={this.props.cards.filter(c => c.status === 'in progress')}
        />
        <List id='doneCards'
              title='Done'
              cards={this.props.cards.filter(c => c.status === 'done')}
        />
      </div>
    );
  }
}

export default KanbanBoard;