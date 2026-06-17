import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import AttractionsBox from "./AttractionsBox.jsx";
import AttractionModal from "./AttractionModal.jsx";

const attractions = [
    {
        id: 1,
        img: "/img/center_of_the_earth.svg",
        name: "Journey to the Center of the Earth",
        type: "Roller Coaster",
        park: "Tokyo Disney Sea",
        area: "Mysterious Island",
        description:
            "The enigmatic genius Captain Nemo has unearthed a heretofore unknown world deep underground. During your journey on board a unique subterranean vehicle, the volcano suddenly shakes and erupts, taking you where even Captain Nemo has never been before.",
        review: "fun",
        like: true,
    },
    {
        id: 2,
        img: "/img/tower_of_terror.svg",
        name: "Tower of Terror",
        type: "Free Fall",
        park: "Tokyo Disney Sea",
        area: "American Water",
        description:
            'In New York, 1912, stands the hotel known as the "Tower of Terror," so called after the mysterious disappearance of its owner in 1899. Now, the New York City Preservation Society has finished restoring the infamous hotel, and started giving tours to the public. But what happens when you take the elevator to the top floor...?',
        review: "fun",
        like: true,
    },

    {
        id: 3,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 4,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 5,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 6,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 7,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 8,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 9,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 10,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 11,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 12,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
    {
        id: 13,
        img: "/img/western_river_railroad.svg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
];

function App() {
    const [attractionsArr, setAttractionsArr] = useState(attractions);
    const [park, setPark] = useState("All");
    const [searchWord, setSearchWord] = useState("");
    const [displayMode, setDisplayMode] = useState("grid");
    const [attractionId, setAttractionId] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const choiceAttraction = attractionsArr.find((attraction) => attraction.id === attractionId);

    return (
        <div className="App">
            <SearchBox
                setDisplayMode={setDisplayMode}
                setSearchWord={setSearchWord}
                setPark={setPark}
            />
            <AttractionsBox
                park={park}
                displayMode={displayMode}
                searchWord={searchWord}
                setAttractionId={setAttractionId}
                setIsModalOpen={setIsModalOpen}
                attractionsArr={attractionsArr}
            />
            {isModalOpen && (
                <AttractionModal attraction={choiceAttraction} setAttractions={setAttractionsArr} />
            )}
        </div>
    );
}

export default App;
