
// import PropTypes from 'prop-types';

//This is a functional Component
export const ContactListItem = ({name, number, deleteContact}) => {
        return (
            <li>
                {name}:
                <span>{number}</span>
                <button onClick={deleteContact}> Delete </button>
            </li>
        )
    
}

// ContactListItem.propTypes = {
    
// };