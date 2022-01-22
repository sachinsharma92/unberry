import React from 'react';
import { Modal } from 'antd';
import checkCircleIcon from "../../../assets/icons/check-circle.svg";

// Styles
import './styles.scss';

export default function ConfirmMemberModal(props) {

  return (
    <>
      <Modal wrapClassName="invite-confirm-modal" maskStyle={{background: 'rgba(0,0,0,0.8)'}} centered visible={props.visible} footer={false} onCancel={props.onCancel}>
        <div className='modal-body'>
          <img src={checkCircleIcon} />
          <h2 className='title2'>Invitation sent</h2>
          <p className='description'>to karan@grappus.com</p>
        </div>
      </Modal>
    </>
  )
}
