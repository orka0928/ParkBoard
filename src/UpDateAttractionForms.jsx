import * as Comp from "./AttractionModalComponents";
const UpdateAttractionForm = function ({
    areas,
    originalData,
    updateAttractionData,
    editComp,
    setEditComp,
    setUpdateAttractionData,
    setAttractions,
    onHandleDelete,
}) {
    return (
        <div className="attraction-details">
            <h3>
                {editComp === "name" ? (
                    <Comp.UpdateInputComp
                        objKey={"name"}
                        originalData={originalData.name}
                        updateAttractionData={updateAttractionData.name}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                        setAttractions={setAttractions}
                    />
                ) : (
                    <Comp.Text
                        value1={updateAttractionData.name}
                        value2={"name"}
                        setEditComp={setEditComp}
                    />
                )}
            </h3>
            <h4>
                {editComp === "park" ? (
                    <Comp.UpdateParkForm
                        updateAttractionData={updateAttractionData}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                    />
                ) : (
                    <Comp.Text
                        value1={updateAttractionData.park}
                        value2={"park"}
                        setEditComp={setEditComp}
                    />
                )}
            </h4>
            <h5>
                {editComp === "area" ? (
                    <Comp.UpdateAreaForm
                        areas={areas}
                        updateAttractionData={updateAttractionData}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                    />
                ) : (
                    <Comp.Text
                        value1={updateAttractionData.area}
                        value2={"area"}
                        setEditComp={setEditComp}
                    />
                )}
            </h5>
            <p>
                {editComp === "type" ? (
                    <Comp.UpdateInputComp
                        updateAttractionData={updateAttractionData.type}
                        originalData={originalData.type}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                        setAttractions={setAttractions}
                    />
                ) : (
                    <Comp.Text
                        value1={updateAttractionData.type}
                        value2={"type"}
                        setEditComp={setEditComp}
                    />
                )}
            </p>
            <p>
                {editComp === "description" ? (
                    <Comp.UpdateDescriptionForm
                        updateAttractionData={updateAttractionData}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                    />
                ) : (
                    <>
                        <Comp.Text
                            value1={updateAttractionData.description}
                            value2={"description"}
                            setEditComp={setEditComp}
                        />
                    </>
                )}
            </p>
            <p>
                {editComp === "review" ? (
                    <Comp.UpdateInputComp
                        updateAttractionData={updateAttractionData.review}
                        originalData={originalData.review}
                        objKey={"review"}
                        setEditComp={setEditComp}
                        setUpdateAttractionData={setUpdateAttractionData}
                        setAttractions={setAttractions}
                    />
                ) : (
                    <Comp.Text
                        value1={updateAttractionData.review}
                        value2={"review"}
                        setEditComp={setEditComp}
                    />
                )}
            </p>
            <button type="button" className={`btn-like ${updateAttractionData.like ? "like" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="like-icon">
                    {/* <!--Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                    <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                </svg>
            </button>
            <button
                type="button"
                className="btn-delete"
                onClick={(e) => {
                    e.stopPropagation();
                    onHandleDelete(originalData.id);
                }}
            >
                &times;
            </button>
        </div>
    );
};
export default UpdateAttractionForm;
