import proptype from 'prop-types';

import SeachBar from './SearchBar';
import ProductTable from './ProductTable';

export default function FilterableProductTable(
    { products, filterData, filterAction, instockOnlyData, instockOnlyAction }) {
        return (
            <div>
                <SeachBar
                    filterText={filterData}
                    instockOnly={instockOnlyData}
                    onFilterTextChange={filterAction}
                    onInStockOnlyChange={instockOnlyAction}
                />
                <ProductTable
                    products={products}
                    filterText={filterData}
                    instockOnly={instockOnlyData}
                />
            </div>
        );
}

FilterableProductTable.propTypes = {
    products: proptype.array.isRequired,
    filterData: proptype.string.isRequired,
    filterAction: proptype.func.isRequired,
    instockOnlyData: proptype.bool.isRequired,
    instockOnlyAction: proptype.func.isRequired
};

