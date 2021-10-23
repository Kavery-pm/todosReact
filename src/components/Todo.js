import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [isDelete, setisDelete] = useState(false);
  const deleteHandler = (event) => {
    setisDelete(true);
  };
  const closeModalHandler = ()=>{
      setisDelete(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {isDelete && <Modal onClose={closeModalHandler}></Modal>}
      {isDelete && <Backdrop></Backdrop>}
    </div>
  );
};
export default Todo;
