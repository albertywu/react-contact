import React, {Component} from 'react';
import {render} from 'react-dom';
import ContactSearch from './ContactSearch'

let contacts = [
  { id: 1, name: 'Albert Wu', email: 'albertywu@gmail.com' },
  { id: 2, name: 'Albert Foo', email: 'albertfoo@gmail.com' },
  { id: 3, name: 'Albert Y Moo', email: 'albertymoo@gmail.com' },
  { id: 4, name: 'Veronika Wu', email: 'veronikawu@gmail.com' },
  { id: 5, name: 'Steven Wu', email: 'stevenywu@gmail.com' }
]

class App extends Component {

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChange(value) {
    this.setState({
      inputValue: value
    })
  }

  render(){
    return (
        <ContactSearch
          inputValue={ this.state.inputValue }
          onChange={ this.handleChange.bind(this) }
          contacts={ contacts }
        />
    );
  }
}

render(<App />, document.getElementById('root'));
