import React, {Component} from 'react'
import ContactItem from './ContactItem'

class ContactList extends Component {

  static getSearchableTerm(contact) {
    return `${ contact.name } ${ contact.email }`.toLowerCase()
  }

  render() {
    let contacts = this.props.contacts
      .filter(c => {
        return ContactList.getSearchableTerm(c).indexOf(this.props.filterValue.toLowerCase()) > -1
      }, this)
      .map(c => {
        return (
          <ContactItem key={c.id} name={c.name} email={c.email} />
        )
      })

    return(
      <ul>
        { contacts }
      </ul>
    )
  }
}

export default ContactList
