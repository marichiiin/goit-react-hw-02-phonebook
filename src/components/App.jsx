import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // Create a function that add contact
  addContact = newContact => {
    this.setState(prevState =>({
      contacts: [...prevState.contacts, newContact],
    }));
  }

  // Create a function that delete contact
  deleteContact = id => {
    this.setState(prevState =>({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  // Create a function for the filter state
  setFilter = filterValue => {
    this.setState({
      filter: filterValue,
    });
  };

  // Create a arrow function that returns the lowercase version of the value of the filter input
  filterContact = () =>{
    // 1. Destructure the state of the contacts and filter
    const { contacts, filter } = this.state;
    // 2. Transform the filter stae value into lowercase
    const filterValueToLowerCase = filter.toLowerCase();
    // 3. Check the contact list for the ones that is equal to the value of the filter state then return it
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValueToLowerCase));
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} /> {/* Pass the funtion for adding contacts and the state contacts*/}

        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} />
        <ContactList filterContact={this.filterContact} deleteContact={this.deleteContact} />
      </div>
    )
  }
}

