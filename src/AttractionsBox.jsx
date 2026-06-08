import AttractionCard from "./Card";

import { useState } from "react";
const attractionsArr = [
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

const AttractionsBox = function ({ park, displayMode, searchWord }) {
    const handleLike = function (id) {
        setAttractions((attractions) =>
            attractions.map((attraction) =>
                attraction.id === id ? { ...attraction, like: !attraction.like } : attraction,
            ),
        );
    };
    const [attractions, setAttractions] = useState(attractionsArr);

    return (
        <div className={`attractions-${displayMode}`}>
            {searchWord
                ? attractions
                      .filter((attraction) => attraction.name === searchWord)
                      .map((attraction) => (
                          <AttractionCard
                              attraction={attraction}
                              key={attraction.id}
                              displayMode={displayMode}
                              onHandleLike={handleLike}
                          />
                      ))
                : park === "All"
                  ? attractions.map((attraction) => (
                        <AttractionCard
                            attraction={attraction}
                            key={attraction.id}
                            displayMode={displayMode}
                            onHandleLike={handleLike}
                        />
                    ))
                  : attractions
                        .filter((attraction) => attraction.park === `Tokyo Disney ${park}`)
                        .map((attraction) => (
                            <AttractionCard
                                attraction={attraction}
                                key={attraction.id}
                                displayMode={displayMode}
                                onHandleLike={handleLike}
                            />
                        ))}
        </div>
    );
};

export default AttractionsBox;
