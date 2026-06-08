import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import AttractionsBox from "./AttractionsBox.jsx";

function App() {
    const [park, setPark] = useState("All");
    const [searchWord, setSearchWord] = useState("");
    const [displayMode, setDisplayMode] = useState("grid");

    return (
        <div className="App">
            <SearchBox
                setDisplayMode={setDisplayMode}
                setSearchWord={setSearchWord}
                setPark={setPark}
            />
            <AttractionsBox park={park} displayMode={displayMode} searchWord={searchWord} />
        </div>
    );
}

export default App;
