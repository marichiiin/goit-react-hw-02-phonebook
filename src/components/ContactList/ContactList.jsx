import { ContactListItem } from '../ContactListItem/ContactListItem';

// import PropTypes from 'prop-types';

//This is a functional Component

export const ContactList = ({ contacts }) => {
    return (
        <ul>
            {contacts.map(({id, name, number}) => (
                <ContactListItem 
                    key = {id}
                    id = {id}
                    name = {name}
                    number = {number}
                />
            ))}
        </ul>
    )
}

// ContactList.propTypes = {
    
// };