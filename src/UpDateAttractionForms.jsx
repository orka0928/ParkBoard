// import { ModalCloseBtn } from "./AddModal";
import { FlexBtns, ModalCloseBtn } from "./ReusableComponents";

import {
    UpdateForm,
    UpdateArea,
    UpdatePark,
    UpdateDescription,
    UpdateInputForm,
    Text,
    UpdateLikeBtn,
    DeleteBtn,
} from "./AttractionModalComponents";
import { useState } from "react";
const UpdateAttractionForm = function ({
    areas,
    originalData,
    setAttractions,
    onHandleDelete,
    onHandleLike,
    setIsModalOpen,
}) {
    const [editComp, setEditComp] = useState("");
    const [updateAttractionData, setUpdateAttractionData] = useState({
        name: originalData.name,
        park: originalData.park,
        area: originalData.area,
        type: originalData.type,
        description: originalData.description,
        review: originalData.review,
        like: originalData.like,
    });

    return (
        <div className="attraction-details">
            <h3>
                {editComp === "name" ? (
                    <>
                        <UpdateInputForm
                            editComp={editComp}
                            originalData={originalData}
                            updateAttractionData={updateAttractionData}
                            setUpdateAttractionData={setUpdateAttractionData}
                            setAttractions={setAttractions}
                            setEditComp={setEditComp}
                        />
                    </>
                ) : (
                    <Text
                        value1={updateAttractionData.name}
                        value2={"name"}
                        setEditComp={setEditComp}
                    />
                )}
            </h3>
            <h4>
                {editComp === "park" ? (
                    <>
                        <UpdateForm
                            editComp={editComp}
                            setEditComp={setEditComp}
                            originalData={originalData}
                            updateAttractionData={updateAttractionData}
                            setUpdateAttractionData={setUpdateAttractionData}
                            setAttractions={setAttractions}
                        >
                            <UpdatePark
                                parks={updateAttractionData[editComp]}
                                setUpdateAttractionData={setUpdateAttractionData}
                            />
                        </UpdateForm>
                    </>
                ) : (
                    <Text
                        value1={updateAttractionData.park}
                        value2={"park"}
                        setEditComp={setEditComp}
                    />
                )}
            </h4>
            <h5>
                {editComp === "area" ? (
                    <>
                        <UpdateForm
                            editComp={editComp}
                            setEditComp={setEditComp}
                            originalData={originalData}
                            updateAttractionData={updateAttractionData}
                            setUpdateAttractionData={setUpdateAttractionData}
                            setAttractions={setAttractions}
                        >
                            <UpdateArea
                                areas={areas}
                                updateAttractionData={updateAttractionData}
                                setUpdateAttractionData={setUpdateAttractionData}
                            />
                        </UpdateForm>
                    </>
                ) : (
                    <Text
                        value1={updateAttractionData.area}
                        value2={"area"}
                        setEditComp={setEditComp}
                    />
                )}
            </h5>
            <p>
                {editComp === "type" ? (
                    <UpdateInputForm
                        editComp={editComp}
                        setEditComp={setEditComp}
                        originalData={originalData}
                        updateAttractionData={updateAttractionData}
                        setUpdateAttractionData={setUpdateAttractionData}
                        setAttractions={setAttractions}
                    />
                ) : (
                    <Text
                        value1={updateAttractionData.type}
                        value2={"type"}
                        setEditComp={setEditComp}
                    />
                )}
            </p>
            <p>
                {editComp === "description" ? (
                    <>
                        <UpdateForm
                            editComp={editComp}
                            setEditComp={setEditComp}
                            originalData={originalData}
                            updateAttractionData={updateAttractionData}
                            setUpdateAttractionData={setUpdateAttractionData}
                            setAttractions={setAttractions}
                        >
                            <UpdateDescription
                                description={updateAttractionData[editComp]}
                                setUpdateAttractionData={setUpdateAttractionData}
                            />
                        </UpdateForm>
                    </>
                ) : (
                    <>
                        <Text
                            value1={updateAttractionData.description}
                            value2={"description"}
                            setEditComp={setEditComp}
                        />
                    </>
                )}
            </p>
            <p>
                {editComp === "review" ? (
                    <UpdateInputForm
                        editComp={editComp}
                        setEditComp={setEditComp}
                        originalData={originalData}
                        updateAttractionData={updateAttractionData}
                        setUpdateAttractionData={setUpdateAttractionData}
                        setAttractions={setAttractions}
                    />
                ) : (
                    <Text
                        value1={updateAttractionData.review}
                        value2={"review"}
                        setEditComp={setEditComp}
                    />
                )}
            </p>
            <FlexBtns>
                <UpdateLikeBtn
                    updateAttractionData={updateAttractionData}
                    setUpdateAttractionData={setUpdateAttractionData}
                    onHandleLike={onHandleLike}
                    originalData={originalData}
                />
                <DeleteBtn onHandleDelete={onHandleDelete} originalData={originalData} />
                <ModalCloseBtn closeModal={setIsModalOpen} />
            </FlexBtns>
        </div>
    );
};
export default UpdateAttractionForm;
