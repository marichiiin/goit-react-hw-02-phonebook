import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
//import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';


// export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     //filter: '',
//     name: '',
//     number: ''
//   };

//   // Function to hadle the name change
//   handleNameChange = e => {
//     this.setState({name: e.target.value});
//   }

//   handleNumberChange = e => {
//     this.setState({number: e.target.value});
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number, contacts } = this.state;
//     const {addContact, contact } = this.props;
//     if(name.trim() === '' || number.trim() === '') {
//       return;
//     }
//     const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLocaleLowerCase())

//     if (existingContact) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     addContact ({
//       id: nanoid(),
//       name: name.trim(),
//       number: number.trim()
//     });

//     this.setState({
//       name: '',
//       number: ''
//     });
//   };


//   render() {
//     const { name, number } = this.state;
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <p>Name:</p>
//             <input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
//               required
//               value={name}
//               onChange={this.handleNameChange}
//             />
//           </label>

//           <label>
//             <p>Number:</p>
//             <input
//               type="tel"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//               onChange={this.handleNumberChange}
//             />
//           </label>
//           <button type="submit">Add Contact</button>
//         </form>
//         <div>
//           <ul>
//             <li>{this.handleSubmit}</li>
//           </ul>
//         </div>
//       </>
//     )
//   }
// }

export class App extends Component {
  state = {
    // contacts: [],
    filter: '',
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]
  };

  // Create a function that add contact
  addContact = newContact => {
    this.setState(prevState =>({
      contacts: [...prevState.contacts, newContact],
    }));
  }
  // Create a function that delete contact
  // Create a function that filter the contacts
  // Create a arrow function that returns the lowercase version of the value of the filter input

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} contacts={contacts} /> {/* Pass the funtion for adding contacts and the state contacts*/}
{/*
        <h2>Contacts</h2>
        <Filter filter={filter} setFilter={this.setFilter} /> {/* Pass the filter state and the function that filter the contacts*/}
       {/* <ContactList />  Pass the filter arrow function and the function that deletes the contacts*/}
        <ContactList contacts={contacts} />
      </div>
    )
  }
}

