const UpdateAndDeleteBtn = function ({
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

const InputForm = function ({
    objKey,
    updateAttractionData,
    setUpdateAttractionData,
    originalData,
}) {
    return (
        <input
            type="input"
            defaultValue={updateAttractionData}
            placeholder={originalData}
            onChange={(e) =>
                setUpdateAttractionData((_attraction) => ({
                    ..._attraction,
                    [objKey]: e.target.value,
                }))
            }
        />
    );
};
const InputUpdateComp = function ({
    objKey,
    originalData,
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
    setAttractions,
    id,
}) {
    return (
        <>
            <InputForm
                updateAttractionData={updateAttractionData}
                originalData={originalData}
                objKey={objKey}
                setUpdateAttractionData={setUpdateAttractionData}
            />
            <UpdateAndDeleteBtn
                objKey={objKey}
                setEditComp={setEditComp}
                originalData={originalData}
                id={id}
                updateAttractionData={updateAttractionData}
                setUpdateAttractionData={setUpdateAttractionData}
                setAttractions={setAttractions}
            />
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
// const AttractionNameForm = function ({
//     updateAttractionData,
//     setEditComp,
//     setUpdateAttractionData,
// }) {
//     return (
//         <>
//             <input type="input" defaultValue={updateAttractionData.name} />
//             <UpdateAndDeleteBtn
//                 setEditComp={setEditComp}
//                 setUpdateAttractionData={setUpdateAttractionData}
//             />
//         </>
//     );
// };
const UpdateParkForm = function ({ updateAttractionData, setEditComp, setUpdateAttractionData }) {
    return (
        <>
            <select value={updateAttractionData.park}>
                <option>Tokyo Disney Land</option>
                <option>Tokyo Disney Sea</option>
            </select>
            <UpdateAndDeleteBtn
                setEditComp={setEditComp}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </>
    );
};
const UpdateAreaForm = function ({
    areas,
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
}) {
    return (
        <>
            <select
                value={updateAttractionData.area}
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
            <UpdateAndDeleteBtn
                setEditComp={setEditComp}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </>
    );
};
const UpdateTypeForm = function ({ updateAttractionData, setEditComp, setUpdateAttractionData }) {
    return (
        <>
            <input type="input" value={updateAttractionData.type} />
            <UpdateAndDeleteBtn
                setEditComp={setEditComp}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </>
    );
};
const UpdateDescriptionForm = function ({
    updateAttractionData,
    setEditComp,
    setUpdateAttractionData,
}) {
    return (
        <>
            <textarea
                value={updateAttractionData.description}
                // onChange={(e) =>
                //     setUpdateAttractionData((_attraction) => ({
                //         ..._attraction,
                //         description: e.target.value,
                //     }))

                className="description-textarea"
            ></textarea>
            <UpdateAndDeleteBtn
                setEditComp={setEditComp}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </>
    );
};
const UpdateReviewForm = function ({ updateAttractionData, setEditComp, setUpdateAttractionData }) {
    return (
        <>
            <input type="input" value={updateAttractionData.review} />
            <UpdateAndDeleteBtn
                setEditComp={setEditComp}
                setUpdateAttractionData={setUpdateAttractionData}
            />
        </>
    );
};
export {
    // AttractionNameForm,
    UpdateAreaForm,
    UpdateParkForm,
    UpdateTypeForm,
    UpdateDescriptionForm,
    UpdateReviewForm,
    Text,
    InputUpdateComp,
};
