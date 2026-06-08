import { useState } from "react";

const SearchBox = function ({ setPark, setDisplayMode, setSearchWord }) {
    return (
        <div className="search-box">
            <SearchBar setSearchWord={setSearchWord} />
            <TogglePark setPark={setPark} />
            <ToggleDisplay setDisplayMode={setDisplayMode} />
            <FilterBar />
        </div>
    );
};
const SearchBar = function ({ setSearchWord }) {
    const [word, setWord] = useState("");

    return (
        <>
            <input type="search" onChange={(e) => setWord(e.target.value)}></input>
            <button type="submit" onClick={() => setSearchWord(word)}>
                検索
            </button>
        </>
    );
};
const TogglePark = function ({ setPark }) {
    return (
        <>
            <button type="button" value="Land" onClick={() => setPark("Land")}>
                Land
            </button>
            <button type="button" value="Sea" onClick={() => setPark("Sea")}>
                Sea
            </button>
            <button type="button" value="All" onClick={() => setPark("All")}>
                All
            </button>
        </>
    );
};
const ToggleDisplay = function ({ setDisplayMode }) {
    return (
        <>
            <button type="button" value="grid" onClick={() => setDisplayMode("grid")}>
                <img src="/img/grid.png" alt="grid-img" />
            </button>
            <button type="button" value="row" onClick={() => setDisplayMode("row")}>
                <img src="/img/line.png" alt="line-img" />
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
