import propTypes from 'prop-types'; // manage or control parameter

export default function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>;
    
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

ProductRow.propTypes = {
    product: propTypes.object.isRequired
};