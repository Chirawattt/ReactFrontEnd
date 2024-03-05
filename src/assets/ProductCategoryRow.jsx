import propTypes from 'prop-types'; // manage or control parameter

export default function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

ProductCategoryRow.propTypes = {
    category: propTypes.string.isRequired
};