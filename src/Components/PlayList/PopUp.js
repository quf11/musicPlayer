import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // تنظیم عنصر ریشه برای مدال

const PopUp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>نمایش Popup</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Popup مثال"
      >
        <div className="bg-white p-4">
          <h2>عنوان Popup</h2>
          <p>محتوای Popup</p>
          <button onClick={() => setModalIsOpen(false)}>بستن</button>
        </div>
      </Modal>
    </div>
  );
};

export default PopUp;