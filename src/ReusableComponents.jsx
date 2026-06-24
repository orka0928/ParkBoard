export const FlexBtns = function ({ children, cl = "" }) {
    return <div className={`btn-flex ${cl}`}>{children}</div>;
};
export const ModalCloseBtn = function ({ closeModal }) {
    return (
        <button type="button" onClick={() => closeModal(false)}>
            閉じる
        </button>
    );
};
