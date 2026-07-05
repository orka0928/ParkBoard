import "./App.css";
import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import AttractionsBox from "./AttractionsBox.jsx";
import AttractionModal from "./AttractionModal.jsx";
import AddModal from "./AddModal.jsx";

const attractionsArr = [
    {
        id: 1,
        // img: `/img/center_of_the_earth.svg`,
        img: `${process.env.PUBLIC_URL}/img/center_of_the_earth.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/tower_of_terror.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
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
        img: `${process.env.PUBLIC_URL}/img/western_river_railroad.svg`,
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        description:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
];

const areas = {
    "Tokyo Disney Land": [
        "World Bazaar",
        "Adventureland",
        "Westernland",
        "Critter Country",
        "Fantasyland",
        "Toontown",
        "Tomorrowland",
    ],
    "Tokyo Disney Sea": [
        "Mediterranean Harbor",
        "American Waterfront",
        "Port Discovery",
        "Lost River Delta",
        "Fantasy Springs",
        "Arabian Coast",
        "Mermaid Lagoon",
        "Mysterious Island",
    ],
};

const App = function () {
    const [attractions, setAttractions] = useState(attractionsArr);
    const [park, setPark] = useState("All");
    const [searchWord, setSearchWord] = useState("");
    const [displayMode, setDisplayMode] = useState("grid");
    const [attractionId, setAttractionId] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [openAddModal, setOpenAddModal] = useState(false);

    const choiceAttraction = attractions.find((attraction) => attraction.id === attractionId);

    const handleDelete = function (id) {
        const valid = window.confirm("本当に削除しますか？");
        if (!valid) return;
        setAttractions((attractions) => attractions.filter((attraction) => attraction.id !== id));

        setIsModalOpen(false);
    };
    const handleLike = function (id) {
        setAttractions((attractions) =>
            attractions.map((attraction) =>
                attraction.id === id ? { ...attraction, like: !attraction.like } : attraction,
            ),
        );
    };

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
                setAttractions={setAttractions}
                setAttractionId={setAttractionId}
                setIsModalOpen={setIsModalOpen}
                attractions={attractions}
                onHandleDelete={handleDelete}
                onHandleLike={handleLike}
                setOpenAddModal={setOpenAddModal}
            />
            {isModalOpen && choiceAttraction && (
                <AttractionModal
                    attraction={choiceAttraction}
                    setAttractions={setAttractions}
                    onHandleDelete={handleDelete}
                    onHandleLike={handleLike}
                    areas={areas}
                    setIsModalOpen={setIsModalOpen}
                />
            )}
            {openAddModal && (
                <AddModal
                    areas={areas}
                    setAttractions={setAttractions}
                    setOpenAddModal={setOpenAddModal}
                />
            )}
        </div>
    );
};

export default App;
