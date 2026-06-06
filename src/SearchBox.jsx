const SearchBox = function ({ setTogglePark }) {
    return (
        <div className="search-box">
            <SerchBar />
            <ToggleButton setTogglePark={setTogglePark} />
            <FilterBar />
        </div>
    );
};
const SerchBar = function () {
    return <input type="search"></input>;
};
const ToggleButton = function ({ setTogglePark }) {
    const handleTogglePark = function () {
        setTogglePark((prv) => !prv);
    };
    return (
        <>
            <button type="button" onClick={handleTogglePark}>
                Land
            </button>
            <button type="button" onClick={handleTogglePark}>
                Sea
            </button>
        </>
    );
};

const FilterBar = function () {
    return (
        <select>
            <option>新しい順</option>
            <option>古い順</option>
        </select>
    );
};
export default SearchBox;
