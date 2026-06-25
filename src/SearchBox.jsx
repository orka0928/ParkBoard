import { useState } from "react";

const SearchBox = function ({ setPark, setDisplayMode, setSearchWord }) {
    return (
        <header className="search-box">
            <SearchBar setSearchWord={setSearchWord} />
            <div className="filters">
                <TogglePark setPark={setPark} />
                <ToggleDisplay setDisplayMode={setDisplayMode} />
                <FilterBar />
            </div>
        </header>
    );
};
const SearchBar = function ({ setSearchWord }) {
    const [word, setWord] = useState("");

    return (
        <div className="search">
            <input
                type="search"
                className="search-input"
                onChange={(e) => setWord(e.target.value)}
            ></input>
            <button type="submit" onClick={() => setSearchWord(word)}>
                検索
            </button>
        </div>
    );
};
const TogglePark = function ({ setPark }) {
    return (
        <div className="btn-flex toggle-park ">
            <button
                type="button"
                value="Land"
                className="btn-land btn-base"
                onClick={() => setPark("Land")}
            >
                Land
            </button>
            <button
                type="button"
                value="Sea"
                className="btn-sea btn-base"
                onClick={() => setPark("Sea")}
            >
                Sea
            </button>
            <button
                type="button"
                value="All"
                className="btn-all btn-base"
                onClick={() => setPark("All")}
            >
                All
            </button>
        </div>
    );
};
const ToggleDisplay = function ({ setDisplayMode }) {
    return (
        <>
            <button
                type="button"
                value="grid"
                className="btn-grid"
                onClick={() => setDisplayMode("grid")}
            >
                <img src="/img/grid.png" alt="grid-img" className="grid-icon" />
            </button>
            <button
                type="button"
                value="row"
                className="btn-row "
                onClick={() => setDisplayMode("row")}
            >
                <img src="/img/line.png" alt="line-img" className="row-icon " />
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
