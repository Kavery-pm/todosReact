const Modal = (props) => {
  return (
    <div className="modal">
      <p>are you sure?</p>
      <button className="btn-btn-alt" onClick={props.onClose}>
        Cancel
      </button>
      <button className="btn">Confirm </button>
    </div>
  );
};
export default Modal;
