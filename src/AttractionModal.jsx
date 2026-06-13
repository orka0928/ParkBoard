import { useState } from "react";

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

const AttractionModal = function ({ attraction }) {
    const [attractionData, setAttractionData] = useState({
        name: attraction.name,
        park: attraction.park,
        area: attraction.area,
        type: attraction.type,
        description: attraction.description,
        review: attraction.review,
    });
    const [editComp, setEditComp] = useState("");

    return (
        <div className="attraction-modal">
            <figure>
                <img
                    src={attraction.img}
                    alt={`${attraction.name}-img`}
                    // className="attraction-img"
                />
            </figure>
            <div className="attraction-details">
                <h3>
                    {editComp === "name" ? (
                        <ToggleFormButton value={attractionData.name} setEditComp={setEditComp} />
                    ) : (
                        <>
                            <Text
                                value1={attraction.name}
                                value2={"name"}
                                setEditComp={setEditComp}
                            />
                        </>
                    )}
                </h3>
                <p>
                    {editComp === "park" ? (
                        // <ToggleFormButton value={attractionData.park} setEditComp={setEditComp} />
                        <>
                            <select
                                value={attractionData.park}
                                onChange={(e) =>
                                    setAttractionData((_attraction) => ({
                                        ...attraction,
                                        park: e.target.value,
                                    }))
                                }
                            >
                                <option>Tokyo Disney Land</option>
                                <option>Tokyo Disney Sea</option>
                            </select>
                        </>
                    ) : (
                        <Text value1={attraction.park} value2={"park"} setEditComp={setEditComp} />
                    )}
                </p>

                {editComp === "area" ? (
                    <>
                        <select>
                            <optgroup label="Tokyo Disney Land">
                                {areas["Tokyo Disney Land"].map((area) => (
                                    <option value={area}>{area}</option>
                                ))}
                            </optgroup>
                            <optgroup label="Tokyo Disney Sea">
                                {areas["Tokyo Disney Sea"].map((area) => (
                                    <option value={area}>{area}</option>
                                ))}
                            </optgroup>
                        </select>
                        <button type="button" onClick={() => setEditComp("")}>
                            キャンセル
                        </button>
                        <button type="button" onClick={() => setEditComp("")}>
                            更新
                        </button>
                    </>
                ) : (
                    <Text value1={attraction.area} value2={"area"} setEditComp={setEditComp} />
                )}

                <p>
                    {editComp === "type" ? (
                        <ToggleFormButton value={attractionData.type} setEditComp={setEditComp} />
                    ) : (
                        <Text value1={attraction.type} value2={"type"} setEditComp={setEditComp} />
                    )}
                </p>
                <h4>
                    {editComp === "description" ? (
                        <>
                            <textarea
                                value={attractionData.description}
                                onChange={(e) =>
                                    setAttractionData((_attraction) => ({
                                        ..._attraction,
                                        description: e.target.value,
                                    }))
                                }
                                className="description-textarea"
                            ></textarea>
                            <button type="button" onClick={() => setEditComp("")}>
                                キャンセル
                            </button>
                            <button type="button" onClick={() => setEditComp("")}>
                                更新
                            </button>
                        </>
                    ) : (
                        <>
                            <Text
                                value1={attraction.description}
                                value2={"description"}
                                setEditComp={setEditComp}
                            />
                        </>
                    )}
                </h4>
                <h5>
                    {editComp === "review" ? (
                        <ToggleFormButton value={attractionData.review} setEditComp={setEditComp} />
                    ) : (
                        <Text
                            value1={attraction.review}
                            value2={"review"}
                            setEditComp={setEditComp}
                        />
                    )}
                </h5>
                <button type="button" className={`btn-like ${attraction.like ? "like" : ""}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        className="like-icon"
                    >
                        {/* <!--Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                        <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const ToggleFormButton = function ({ value, setEditComp, setAttractionData }) {
    return (
        <>
            <input type="input" value={value}></input>
            <button type="button" onClick={() => setEditComp("")}>
                キャンセル
            </button>
            <button type="button" onClick={() => setEditComp("")}>
                更新
            </button>
        </>
    );
};

const Text = function ({ value1, value2, setEditComp }) {
    return (
        <>
            {value1}
            <button onClick={() => setEditComp(value2)}>&#9999;&#65039;</button>
        </>
    );
};

export default AttractionModal;
