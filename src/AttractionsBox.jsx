import AttractionCard from "./Card";

import { useState } from "react";

const AttractionsBox = function ({
    attractionsArr,
    park,
    displayMode,
    searchWord,
    setAttractionId,
    setIsModalOpen,
}) {
    const [attractions, setAttractions] = useState(attractionsArr);
    let _attractions;
    if (searchWord) {
        _attractions = attractions.filter((attraction) => attraction.name === searchWord);
    } else if (park === "All") {
        _attractions = [...attractions];
    } else {
        _attractions = attractions.filter(
            (attraction) => attraction.park === `Tokyo Disney ${park}`,
        );
    }
    const handleLike = function (id) {
        setAttractions((attractions) =>
            attractions.map((attraction) =>
                attraction.id === id ? { ...attraction, like: !attraction.like } : attraction,
            ),
        );
    };

    return (
        <main className={`main attractions-${displayMode}`}>
            {_attractions.map((attraction) => (
                <AttractionCard
                    attraction={attraction}
                    key={attraction.id}
                    displayMode={displayMode}
                    onHandleLike={handleLike}
                    setAttractionId={setAttractionId}
                    setIsModalOpen={setIsModalOpen}
                />
            ))}
        </main>
    );
};

export default AttractionsBox;
