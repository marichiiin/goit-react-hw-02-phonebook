
// import PropTypes from 'prop-types';

//This is a functional Component
export const ContactListItem = ({id, name, number, deleteContact}) => {
        return (
            <li>
                {name}:
                <span>{number}</span>
                <button onClick={() => deleteContact(id)}> Delete </button>
            </li>
        )
    
}

// ContactListItem.propTypes = {
    
// };