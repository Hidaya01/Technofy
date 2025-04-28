export const CustomConfirmModal = ({ message, onConfirm, onCancel }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <p>{message}</p>
          <div className="modal-buttons">
            <button className="button-pink" onClick={onConfirm}>
              Confirm
            </button>
            <button className="button-pink" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };