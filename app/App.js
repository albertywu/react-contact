import React, { Component } from 'react';
import {render} from 'react-dom';
import KanbanBoard from './KanbanBoard'

let cardsList = [
  {
    id: 1,
    title: 'My Awesome Book',
    description: 'Something you should read now...',
    status: 'todo',
    tasks: []
  },
  {
    id: 2,
    title: '1892',
    description: 'A long long time ago...',
    status: 'todo',
    tasks: []
  },
  {
    id: 3,
    title: 'My Awesome Book 2',
    description: 'Something you are currently reading...',
    status: 'in progress',
    tasks: []
  },
  {
    id: 4,
    title: 'My Awesome Book',
    description: 'Something you already read...',
    status: 'done',
    tasks: [
      {
        id: 1,
        name: 'ex 1',
        done: true
      },
      {
        id: 2,
        name: 'ex 2',
        done: true
      },
      {
        id: 3,
        name: 'ex 3',
        done: true
      }
    ]
  }
]

class App extends Component {
  render(){
    return (
        <KanbanBoard cards={cardsList} />
    );
  }
}

render(<App />, document.getElementById('root'));
