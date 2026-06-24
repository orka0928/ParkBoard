const UpdateAndCancelBtn = function ({
    objKey,
    originalData,
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
    setAttractions,
    id,
}) {
    const handleCancel = function (key, value) {
        setUpdateAttractionData((_attraction) => ({ ..._attraction, [key]: value }));
        setEditComp("");
    };
    const handleUpdate = function (key, value, _id) {
        setAttractions((_attractions) =>
            _attractions.map((_attraction) =>
                _attraction.id === _id ? { ..._attraction, [key]: value } : _attraction,
            ),
        );
        setEditComp(" ");
    };
    return (
        <>
            <button type="button" onClick={() => handleCancel(objKey, originalData[objKey])}>
                キャンセル
            </button>
            <button
                type="button"
                onClick={(e) => handleUpdate(objKey, updateAttractionData[objKey], id)}
            >
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

const UpdateInput = function ({
    objKey,
    updateAttractionData,
    setUpdateAttractionData,
    originalData,
}) {
    return (
        <input
            type="input"
            defaultValue={updateAttractionData[objKey]}
            placeholder={originalData[objKey]}
            onChange={(e) =>
                setUpdateAttractionData((_attraction) => ({
                    ..._attraction,
                    [objKey]: e.target.value,
                }))
            }
        />
    );
};

const UpdatePark = function ({ parks, setUpdateAttractionData }) {
    return (
        <select
            defaultValue={parks}
            onChange={(e) =>
                setUpdateAttractionData((_attraction) => ({ ..._attraction, park: e.target.value }))
            }
        >
            <option>Tokyo Disney Land</option>
            <option>Tokyo Disney Sea</option>
        </select>
    );
};

const UpdateArea = function ({ areas, updateAttractionData, setUpdateAttractionData }) {
    return (
        <select
            defaultValue={updateAttractionData.area}
            onChange={(e) =>
                setUpdateAttractionData((_attraction) => ({
                    ..._attraction,
                    area: e.target.value,
                }))
            }
        >
            <optgroup label={updateAttractionData.park}>
                {areas[updateAttractionData.park].map((area) => (
                    <option value={area}>{area}</option>
                ))}
            </optgroup>
        </select>
    );
};
const UpdateDescription = function ({ description, setUpdateAttractionData }) {
    return (
        <textarea
            defaultValue={description}
            onChange={(e) =>
                setUpdateAttractionData((_attraction) => ({
                    ..._attraction,
                    description: e.target.value,
                }))
            }
            className="description-textarea"
        ></textarea>
    );
};

const UpdateInputForm = function ({
    editComp,
    originalData,
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
    setAttractions,
}) {
    return (
        <>
            <UpdateInput
                objKey={editComp}
                originalData={originalData}
                updateAttractionData={updateAttractionData}
                setUpdateAttractionData={setUpdateAttractionData}
            />
            <UpdateAndCancelBtn
                objKey={editComp}
                setEditComp={setEditComp}
                id={originalData.id}
                originalData={originalData}
                updateAttractionData={updateAttractionData}
                setUpdateAttractionData={setUpdateAttractionData}
                setAttractions={setAttractions}
            />
        </>
    );
};
const UpdateForm = function ({
    editComp,
    originalData,
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
    setAttractions,
    children,
}) {
    return (
        <>
            {children}
            <UpdateAndCancelBtn
                objKey={editComp}
                setEditComp={setEditComp}
                id={originalData.id}
                originalData={originalData}
                updateAttractionData={updateAttractionData}
                setUpdateAttractionData={setUpdateAttractionData}
                setAttractions={setAttractions}
            />
        </>
    );
};
const UpdateLikeBtn = function ({
    updateAttractionData,
    setUpdateAttractionData,
    onHandleLike,
    originalData,
}) {
    return (
        <button
            type="button"
            className={`btn-like ${updateAttractionData.like ? "like" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                setUpdateAttractionData((attraction) => ({
                    ...attraction,
                    like: !updateAttractionData.like,
                }));
                onHandleLike(originalData.id);
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="like-icon">
                {/* <!--Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
            </svg>
        </button>
    );
};

const DeleteBtn = function ({ onHandleDelete, originalData }) {
    return (
        <button
            type="button"
            className="btn-delete"
            onClick={(e) => {
                e.stopPropagation();

                onHandleDelete(originalData.id);
            }}
        >
            削除
        </button>
    );
};

export {
    UpdateArea,
    UpdatePark,
    UpdateDescription,
    UpdateAndCancelBtn,
    Text,
    UpdateInputForm,
    UpdateForm,
    DeleteBtn,
    UpdateLikeBtn,
};
