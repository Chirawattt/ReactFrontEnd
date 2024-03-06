import propTypes from 'prop-types'; // manage or control parameter

export default function SearchBar({
    filterText,
    instockOnly,
    onFilterTextChange,
    onInStockOnlyChange
}) {
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)} /> // e is object of event and target is the element that triggered the event
            <label>
                <input
                    type="checkbox"
                    checked={instockOnly}
                    onChange={(e) => onInStockOnlyChange(e.target.checked)} />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

SearchBar.propTypes = {
    filterText: propTypes.string.isRequired,
    instockOnly: propTypes.bool.isRequired,
    onFilterTextChange: propTypes.func.isRequired,
    onInStockOnlyChange: propTypes.func.isRequired
};