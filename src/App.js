import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import AttractionsBox from "./AttractionsBox.jsx";

function App() {
    const [togglePark, setTogglePark] = useState(false);
    return (
        <div className="App">
            <SearchBox setTogglePark={setTogglePark} />
            <AttractionsBox togglePark={togglePark} />
        </div>
    );
}

export default App;
