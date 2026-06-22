import { useState } from "react";
const AddModal = function ({ areas }) {
    const [newAttraction, setNewAttraction] = useState({
        id: 1,
        newName: "",
        newPark: "",
        newArea: "",
        newType: "",
        newDescription: "",
        newReview: "",
        newLike: false,
    });
    return (
        <div className="add-modal">
            <NewAttractionIMG />
            <NewAttractionName setNewAttraction={setNewAttraction} />
            <NewAttractionPark setNewAttraction={setNewAttraction} />
            <NewAttractionArea
                newAttraction={newAttraction}
                setNewAttraction={setNewAttraction}
                areas={areas}
            />
        </div>
    );
};

const NewAttractionIMG = function ({}) {
    return (
        <>
            <label for="newattraction-img">アトラクション画像</label>
            <input type="file" id="newattraction-img" className="input-form"></input>
        </>
    );
};

const NewAttractionName = function ({ setNewAttraction }) {
    return (
        <>
            <label for="newattraction-name">アトラクション名</label>
            <input
                type="input"
                id="newattraction-name"
                onChange={(e) =>
                    setNewAttraction((attraction) => ({
                        ...attraction,
                        newName: e.target.value,
                    }))
                }
            ></input>
        </>
    );
};
const NewAttractionPark = function ({ setNewAttraction }) {
    return (
        <>
            <label for="newattraction-name">パーク</label>
            <select
                onChange={(e) =>
                    setNewAttraction((attraction) => ({ ...attraction, newPark: e.target.value }))
                }
            >
                <option>Tokyo Disney Land</option>
                <option>Tokyo Disney Sea</option>
            </select>
        </>
    );
};
const NewAttractionArea = function ({ areas, newAttraction }) {
    const areasArray = Object.entries(areas).map((key) => ({ [key[0]]: key[1] }));
    console.log(Object.entries(areas).map((key) => ({ [key[0]]: key[1] })));
    return (
        <>
            <label for="newattraction-name">エリア</label>
            <select>
                {areasArray.map((park) => (
                    <>
                        <optgroup label={Object.keys(park)}></optgroup>
                        {areas[Object.keys(park)].map((area) => (
                            <option>{area}</option>
                        ))}
                    </>
                ))}
            </select>
        </>
    );
};
export default AddModal;
