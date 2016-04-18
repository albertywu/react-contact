import React, {Component} from 'react'
import SearchInput from './SearchInput'
import ContactList from './ContactList'

class ContactSearch extends Component {

  render() {
    return(
      <div>
        <SearchInput
          inputValue={this.props.inputValue}
          onChange={this.props.onChange}
        />
        <ContactList
          contacts={this.props.contacts}
          filterValue={this.props.inputValue}
        />
      </div>
    )
  }

}

export default ContactSearch
