const UpdateAndDeleteBtn = function ({ objKey, value, setEditComp, setAttractionData }) {
    const handleUpdateAttraction = function (key, value) {
        setAttractionData((_attraction) => ({ ..._attraction, key: value }));
        setEditComp("");
    };
    return (
        <>
            <button type="button" onClick={() => setEditComp("")}>
                キャンセル
            </button>
            <button type="button" onClick={(e) => handleUpdateAttraction(objKey, value)}>
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
const AttractionNameForm = function ({ attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <input type="input" value={attractionData.name} />
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
const UpdateParkForm = function ({ attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <select value={attractionData.park}>
                <option>Tokyo Disney Land</option>
                <option>Tokyo Disney Sea</option>
            </select>
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
const UpdateAreaForm = function ({ areas, attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <select
                value={attractionData.area}
                onChange={(e) =>
                    setAttractionData((_attraction) => ({
                        ..._attraction,
                        area: e.target.value,
                    }))
                }
            >
                <optgroup label={attractionData.park}>
                    {areas[attractionData.park].map((area) => (
                        <option value={area}>{area}</option>
                    ))}
                </optgroup>
            </select>
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
const UpdateTypeForm = function ({ attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <input type="input" value={attractionData.type} />
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
const UpdateDescriptionForm = function ({ attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <textarea
                value={attractionData.description}
                // onChange={(e) =>
                //     setAttractionData((_attraction) => ({
                //         ..._attraction,
                //         description: e.target.value,
                //     }))

                className="description-textarea"
            ></textarea>
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
const UpdateReviewForm = function ({ attractionData, setEditComp, setAttractionData }) {
    return (
        <>
            <input type="input" value={attractionData.review} />
            <UpdateAndDeleteBtn setEditComp={setEditComp} setAttractionData={setAttractionData} />
        </>
    );
};
export {
    AttractionNameForm,
    UpdateAreaForm,
    UpdateParkForm,
    UpdateTypeForm,
    UpdateDescriptionForm,
    UpdateReviewForm,
    UpdateAndDeleteBtn,
    Text,
};
