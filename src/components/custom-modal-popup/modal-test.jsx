import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }

  function onclose() {
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && (
        <Modal
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onclose={onclose}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
}
