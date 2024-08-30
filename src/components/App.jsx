import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './SearchFilter/SearchFilter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    // contacts: [
    //   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    //   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    //   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    //   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    // ]
  };

  // Create a function for handling the changes in the name input
  // Create a function for handling the changes in the number input
  // Create a function for handling the submit button

  render () {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm/>

          <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
        </div>
      </>
    )
  }
}