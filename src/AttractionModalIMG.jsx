const AttractionModalImg = function ({ attraction }) {
    return (
        <figure>
            <img
                src={attraction.img}
                alt={`${attraction.name}-img`}
                // className="attraction-img"
            />
        </figure>
    );
};
export default AttractionModalImg;
