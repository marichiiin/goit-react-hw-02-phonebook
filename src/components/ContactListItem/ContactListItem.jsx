
// import PropTypes from 'prop-types';

//This is a functional Component
export const ContactListItem = ({name, number, deleteContact}) => {
        return (
            <li>
                {name}:
                <span>{number}</span>
                <button>{deleteContact}</button>
            </li>
        )
    
}

// ContactListItem.propTypes = {
    
// };