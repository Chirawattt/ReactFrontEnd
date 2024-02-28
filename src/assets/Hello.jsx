const Hello = ({message, name}) => {
    console.log({message, name});
    return (
        <div>
            <h1>Hello {name} {message}</h1>
        </div>
    );
};

export default Hello;

import propTypes from 'prop-types'; // manage or control parameter
Hello.propTypes = {
    message: propTypes.string.isRequired, // check if message is string and required
    name: propTypes.string.isRequired // check if name is string and required
}
Hello.defaultProps = {
    name: "User", // this is default value if name is not provided or undefined
    message: 'How are you?' // this is default value if message is not provided or undefined
}
