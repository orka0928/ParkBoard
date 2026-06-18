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
        setEditComp(" ");
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
            <button type="button" onClick={() => handleCancel(objKey, originalData)}>
                キャンセル
            </button>
            <button type="button" onClick={(e) => handleUpdate(objKey, updateAttractionData, id)}>
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
            defaultValue={updateAttractionData}
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

const UpdatePark = function ({ parks }) {
    return (
        <select defaultValue={parks}>
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
                updateAttractionData={updateAttractionData[editComp]}
                setUpdateAttractionData={setUpdateAttractionData}
            />
            <UpdateAndCancelBtn
                objKey={editComp}
                setEditComp={setEditComp}
                id={originalData.id}
                originalData={originalData[editComp]}
                updateAttractionData={updateAttractionData[editComp]}
                setUpdateAttractionData={setUpdateAttractionData}
                setAttractions={setAttractions}
            />
        </>
    );
};
const UpdateForm = function ({
    objKey,
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
                objKey={objKey}
                setEditComp={setEditComp}
                id={originalData.id}
                originalData={originalData[objKey]}
                updateAttractionData={updateAttractionData[objKey]}
                setUpdateAttractionData={setUpdateAttractionData}
                setAttractions={setAttractions}
            />
        </>
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
};
