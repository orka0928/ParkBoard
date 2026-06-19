import AttractionCard from "./Card";

const AttractionsBox = function ({
    attractions,
    park,
    displayMode,
    searchWord,
    setAttractionId,
    setIsModalOpen,
    setAttractions,
    onHandleDelete,
}) {
    let _attractions;
    if (searchWord) {
        _attractions = attractions.filter((attraction) => attraction.name === searchWord);
    } else if (park === "All") {
        _attractions = attractions;
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
                    setAttractions={setAttractions}
                    onHandleDelete={onHandleDelete}
                />
            ))}
        </main>
    );
};

export default AttractionsBox;
