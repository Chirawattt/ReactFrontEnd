import propTypes from 'prop-types'; // manage or control parameter

export default function Contact(props) {
    return (
        <div>
            <h2>{props.email} {props.phone}</h2>
            <p>Send me a message!</p>
        </div>
    );
}

Contact.propTypes = {
    email: propTypes.string.isRequired,
    phone: propTypes.string.isRequired
};