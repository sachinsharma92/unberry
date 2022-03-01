import React from 'react';
import { Modal } from 'antd';

import closeButtonIcon from "../../assets/icons/close-button.svg";
import animationImage from "../../assets/json/thanks.gif";

// Styles
import './styles.scss';

export default function ThankModal(props) {

  return (
    <Modal centered visible={props.visible} footer={false} onCancel={props.onCancel} wrapClassName="thanls-modal-style" maskStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
      <div className='modal-body-style'>
        <button className='close-btn' onClick={props.onCancel}><img src={closeButtonIcon} alt="close-icon" /></button>
        <div className='animation-frame'>
          <img src={animationImage} className="ani-img" alt="animation-icon" />
        </div>
        <div className='content'>
        <h3 className='title3'>Thank you for your request.</h3>
        <p className='description'>We will reach out to you soon to schedule a demo call</p>
        </div>
      </div>
    </Modal>
  )
}
