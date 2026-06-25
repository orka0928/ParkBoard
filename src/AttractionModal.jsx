import UpdateAttractionForm from "./UpDateAttractionForms";
import AttractionModalImg from "./AttractionModalIMG";

const AttractionModal = function ({
    areas,
    attraction,
    setAttractions,
    onHandleDelete,
    onHandleLike,
    setIsModalOpen,
}) {
    return (
        <div className="attraction-modal modal">
            <AttractionModalImg attraction={attraction} />
            <UpdateAttractionForm
                originalData={attraction}
                areas={areas}
                setAttractions={setAttractions}
                onHandleDelete={onHandleDelete}
                onHandleLike={onHandleLike}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default AttractionModal;
