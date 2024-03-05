import propTypes from 'prop-types'; // manage or control parameter

export default function ShowName({ name, show }) {
    console.log("name:",name);
    console.log("show:",show);

    return <div>{show && <h2>Your name is: {name}</h2>}</div>
}

ShowName.propTypes = {
    name: propTypes.string.isRequired,
    show: propTypes.bool.isRequired
};