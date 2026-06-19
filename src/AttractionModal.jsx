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

const AttractionModal = function ({ attraction, setAttractions, onHandleDelete, onHandleLike }) {
    return (
        <div className="attraction-modal">
            <AttractionModalImg attraction={attraction} />
            <UpdateAttractionForm
                originalData={attraction}
                areas={areas}
                setAttractions={setAttractions}
                onHandleDelete={onHandleDelete}
                onHandleLike={onHandleLike}
            />
        </div>
    );
};

export default AttractionModal;
