import Modal from "antd/lib/modal/Modal";
import React, { useState } from "react";

const CreateNote = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(props.idNote);
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default CreateNote;
