const attractions = [
    {
        id: 1,
        img: "/img/center_of_the_earth.jpg",
        name: "Journey to the Center of the Earth",
        type: "Roller Coaster",
        park: "Tokyo Disney Sea",
        area: "Mysterious Island",
        descripton:
            "The enigmatic genius Captain Nemo has unearthed a heretofore unknown world deep underground. During your journey on board a unique subterranean vehicle, the volcano suddenly shakes and erupts, taking you where even Captain Nemo has never been before.",
        review: "fun",
        like: true,
    },
    {
        id: 2,
        img: "/img/tower_of_terror.jpg",
        name: "Tower of Terror",
        type: "Free Fall",
        park: "Tokyo Disney Sea",
        area: "American Water",
        descripton:
            'In New York, 1912, stands the hotel known as the "Tower of Terror," so called after the mysterious disappearance of its owner in 1899. Now, the New York City Preservation Society has finished restoring the infamous hotel, and started giving tours to the public. But what happens when you take the elevator to the top floor...?',
        review: "fun",
        like: true,
    },
    {
        id: 3,
        img: "/img/western_river_railroad.jpg",
        name: "Western River Railroad",
        type: "Ride/Transportation",
        park: "Tokyo Disney Land",
        area: "Adventureland",
        descripton:
            "Climb aboard an authentic steam train for a round trip through Adventureland, Critter Country, and Westernland. You'll go on a journey that takes you through a tropical jungle and on to the American Old West.",
        like: false,
    },
];

const AttractionsBox = function ({ togglePark }) {
    let _attractions = [...attractions];
    if (togglePark) {
        _attractions = _attractions.filter((attraction) => attraction.park === "Tokyo Disney Sea");
    } else {
        _attractions = _attractions.filter((attraction) => attraction.park === "Tokyo Disney Land");
    }
    return _attractions.map((attraction) => (
        <AttractionCard attraction={attraction} key={attraction.id} />
    ));
};
const AttractionCard = function ({ attraction }) {
    return (
        <div className="attraction-card">
            <img src={attraction.img} alt={`${attraction.name}-img`} />
            <p>{attraction.name}</p>
            <p>{attraction.park}</p>
            <p>{attraction.area} </p>
            <p>{attraction.type}</p>
            <p>{attraction.descripton}</p>
            <p>{attraction.review}</p>
            <button type="button " className={`btn-like ${attraction.like ? "like" : ""}`}>
                &#9825;
            </button>
        </div>
    );
};

export default AttractionsBox;
