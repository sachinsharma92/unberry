import React from 'react';
import { Modal } from 'antd';
// Styles
import './styles.scss';

export default function ThankModal(props) {

  return (
    <Modal centered visible={props.visible} footer={false} onCancel={props.onCancel} wrapClassName="thanls-modal-style" maskStyle={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
      <div className='modal-body-style'>
        {/* <div className='thanks-lottie' id={props.lottieId} /> */}
        <div className='animation-frame'>
        <iframe src="https://embed.lottiefiles.com/animation/86372"></iframe>
        </div>
        <h3 className='title3'>Thank you for your request.</h3>
        <p className='description'>We will reach out to you soon to schedule a demo call</p>
      </div>
    </Modal>
  )
}
