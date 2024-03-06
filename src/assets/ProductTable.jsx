import propTypes from 'prop-types'; // manage or control parameter

import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

export default function ProductTable({ products, filterText, instockOnly }) {
    const rows = [];
    let lastCategory = null; // to keep track of the last category

    products.forEach((product) => { 
        if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
            return;
        } // if the product name does not contain the filter text, skip it
        if (instockOnly && !product.stocked) {
            return;
        } // if the product is not stocked and the instockOnly checkbox is checked, skip it
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

ProductTable.propTypes = {
    products: propTypes.array.isRequired,
    filterText: propTypes.string.isRequired,
    instockOnly: propTypes.bool.isRequired
};