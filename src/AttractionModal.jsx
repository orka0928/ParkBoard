import { useState } from "react";
import UpdateAttractionForm from "./UpDateAttractionForms";
import AttractionModalImg from "./AttractionModalIMG";

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

const AttractionModal = function ({ attraction, setAttractions }) {
    const [updateAttractionData, setUpdateAttractionData] = useState({
        name: attraction.name,
        park: attraction.park,
        area: attraction.area,
        type: attraction.type,
        description: attraction.description,
        review: attraction.review,
        like: attraction.like,
    });
    const [editComp, setEditComp] = useState("");

    return (
        <div className="attraction-modal">
            <AttractionModalImg attraction={attraction} />
            <UpdateAttractionForm
                originalData={attraction}
                areas={areas}
                updateAttractionData={updateAttractionData}
                editComp={editComp}
                setEditComp={setEditComp}
                setAttractions={setAttractions}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </div>
    );
};

export default AttractionModal;
