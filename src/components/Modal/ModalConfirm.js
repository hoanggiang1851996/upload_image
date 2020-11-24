import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';
import PropTypes from 'prop-types';

const ModalConfirm = (props) => {
  const [visible, setVisible] = useState(false);
  const {
    notifyModal,
    handleOk,
    handleCancel,
    isOpen,
    isLoading,
  } = props;

  useEffect(() => {
    setVisible(isOpen);
  }, [isOpen]);

  return (
    <Modal
      className="my-modal-class"
      title={notifyModal.title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button type="danger" key="cancel" onClick={handleCancel}>
          {notifyModal.buttonCancel || 'Hủy bỏ'}
        </Button>,
        <Button key="submit" type="primary" onClick={handleOk} loading={isLoading}>
          {notifyModal.button}
        </Button>,
      ]}
    >
      {notifyModal.content}
    </Modal>
  );
};

ModalConfirm.propTypes = {
  notifyModal: PropTypes.object.isRequired,
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

ModalConfirm.defaultProps = {
  isLoading: false,
};

export default ModalConfirm;
