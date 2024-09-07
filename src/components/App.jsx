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
  handleNameChange = e => {

  }
  // Create a function for handling the changes in the number input
  // Create a function for handling the submit button

  render() {
    const { contacts, filter } = this.state;
    return (
      <form>
          <h1>Phonebook</h1>
          <label>
            Name 
            <input 
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={contacts}

            />
          </label>
        
      </form>
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