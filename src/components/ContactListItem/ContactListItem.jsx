
// import PropTypes from 'prop-types';

//This is a functional Component
export const ContactListItem = ({id, name, number, deleteContact}) => {
    const handleDelete = () => {
        deleteContact(id);
    }
        return (
            <li>
                {name}:
                <span>{number}</span>
                <button onClick={handleDelete}> Delete </button>
            </li>
        )
    
}

// ContactListItem.propTypes = {
    
// };