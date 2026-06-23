import { useState } from "react";
const AddModal = function ({ areas, setAttractions }) {
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
            <NewAttractionInput
                value={"name"}
                label={"アトラクション名"}
                objKey={"newName"}
                setNewAttraction={setNewAttraction}
            />
            <NewAttractionPark setNewAttraction={setNewAttraction} />
            <NewAttractionArea
                newAttraction={newAttraction}
                setNewAttraction={setNewAttraction}
                areas={areas}
            />
            <NewAttractionInput
                value={"type"}
                label={"アトラクション種類"}
                objKey={"newType"}
                setNewAttraction={setNewAttraction}
            />
            <NewAttractionDescription
                newAttraction={newAttraction}
                setNewAttraction={setNewAttraction}
                areas={areas}
            />
            <NewAttractionInput
                value={"review"}
                label={"感想"}
                objKey={"newReview"}
                setNewAttraction={setNewAttraction}
            />
            <NewAttractionFavBtns setNewAttraction={setNewAttraction} />
            <NewCreateBtn newAttraction={newAttraction} setAttractions={setAttractions} />
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

const NewAttractionInput = function ({ value, label, objKey, setNewAttraction }) {
    return (
        <>
            <label for={`newattraction-${value}`}>{label}</label>
            <input
                type="input"
                id={`newattraction-${value}`}
                onChange={(e) =>
                    setNewAttraction((attraction) => ({
                        ...attraction,
                        [objKey]: e.target.value,
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
const NewAttractionArea = function ({ areas, newAttraction, setNewAttraction }) {
    const areasArray = Object.entries(areas).map((key) => ({ [key[0]]: key[1] }));

    return (
        <>
            <label for="newattraction-area">エリア</label>
            <select
                onChange={(e) =>
                    setNewAttraction((attraction) => ({ ...attraction, newArea: e.target.value }))
                }
            >
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
const NewAttractionDescription = function ({ setNewAttraction }) {
    return (
        <>
            <label>アトラクション説明</label>
            <textarea
                onChange={(e) =>
                    setNewAttraction((attraction) => ({
                        ...attraction,
                        newDescription: e.target.value,
                    }))
                }
            ></textarea>
        </>
    );
};
const NewAttractionFavBtns = function ({ setNewAttraction }) {
    return (
        <>
            <label>お気に入り登録しますか？</label>
            <div className="fav-btns">
                <button
                    type="button"
                    onClick={(e) =>
                        setNewAttraction((attraction) => ({ ...attraction, newLike: true }))
                    }
                >
                    YES
                </button>
                <button
                    type="button"
                    onClick={(e) =>
                        setNewAttraction((attraction) => ({ ...attraction, newLike: false }))
                    }
                >
                    NO
                </button>
            </div>
        </>
    );
};
const NewCreateBtn = function ({ setAttractions, newAttraction }) {
    return (
        <button
            type="button"
            onClick={() => setAttractions((attractions) => [...attractions, newAttraction])}
        >
            登録
        </button>
    );
};
export default AddModal;
