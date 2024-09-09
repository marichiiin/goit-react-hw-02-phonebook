
// import PropTypes from 'prop-types';

//This is a functional Component
export const ContactListItem = ({name, number}) => {
        return (
            <li>
                {name}:
                <span>{number}</span>
            </li>
        )
    
}

// ContactListItem.propTypes = {
    
// };