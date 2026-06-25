import { useState } from "react";
import { FlexBtns, ModalCloseBtn } from "./ReusableComponents";
const AddModal = function ({ areas, setAttractions, setOpenAddModal }) {
    const [newAttraction, setNewAttraction] = useState({
        id: 1,

        name: "",
        park: "",
        area: "",
        type: "",
        description: "",
        review: "",
        like: false,
    });

    return (
        <>
            <div className="add-modal modal">
                <NewAttractionIMG />
                <NewAttractionInput
                    value={"name"}
                    label={"アトラクション名"}
                    objKey={"name"}
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
                    objKey={"type"}
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
                    objKey={"review"}
                    setNewAttraction={setNewAttraction}
                />
                <NewAttractionFavBtns
                    setNewAttraction={setNewAttraction}
                    newAttraction={newAttraction}
                />
                <FlexBtns cl={"create-close-btns"}>
                    <NewCreateBtn setAttractions={setAttractions} newAttraction={newAttraction} />
                    <ModalCloseBtn closeModal={setOpenAddModal} />
                </FlexBtns>
            </div>
        </>
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
                    setNewAttraction((attraction) => ({ ...attraction, park: e.target.value }))
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
                    setNewAttraction((attraction) => ({ ...attraction, area: e.target.value }))
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
                        description: e.target.value,
                    }))
                }
            ></textarea>
        </>
    );
};
const NewAttractionFavBtns = function ({ newAttraction, setNewAttraction }) {
    return (
        <>
            <label>お気に入り登録しますか？</label>
            <div className="btn-flex new-like-btns">
                <button
                    type="button"
                    className={`btn-base ${newAttraction.like ? "new-like-btn-true" : ""}`}
                    onClick={() =>
                        setNewAttraction((attraction) => ({ ...attraction, like: true }))
                    }
                >
                    YES
                </button>
                <button
                    type="button"
                    className={`btn-base ${!newAttraction.like ? "new-like-btn-false" : ""}`}
                    onClick={() =>
                        setNewAttraction((attraction) => ({ ...attraction, like: false }))
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
            className="btn-base"
            onClick={() => setAttractions((attractions) => [...attractions, newAttraction])}
        >
            登録
        </button>
    );
};

export default AddModal;
