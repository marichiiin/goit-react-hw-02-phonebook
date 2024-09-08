import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
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

  // Create a function that add contact
  // Create a function that delete contact
  // Create a function that filter the contacts
  // Create a arrow function that returns the lowercase version of the value of the filter input

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm /> {/* Pass the funtion for adding contacts and the state contacts*/}

        <h2>Contacts</h2>
        <Filter /> {/* Pass the filter state and the function that filter the contacts*/}
        <ContactList /> {/* Pass the filter arrow function and the function that deletes the contacts*/}
      </div>
    )
  }
}

{/* <div>
          <h1>Phonebook</h1>
          <ContactForm/>

          <h2>Contacts</h2>
          <Filter/>
          <ContactList/>
        </div> */}