import { Component } from 'react';
// import PropTypes from 'prop-types';

//this should be in a class component
//Use only the class component on components that uses the state

export class ContactForm extends Component {
  //static propTypes = {};
  state = {
    name: '',
    number: '',
  }
  // Create function that handle the Name change
  // Create function that handle the Number change
  // Create function that handle the submit button
  render() {
    return (
      <form action="">
        <input 
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' \-][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
          required
          value={contacts}
        />
      </form>
            
    )
  }
}

