import React from 'react';
import { Button, Modal } from 'antd';
import closeIcon from '../assets/icons/close-circle.svg';

export default function ConfirmationModal(props) {

  return (
    <>
      <Modal wrapClassName="confirmation-modal" maskStyle={{background: 'rgba(0,0,0,0.8)'}} centered visible={props.visible} footer={false} onCancel={props.onCancel} closeIcon={<img width="35" src={closeIcon}/>}>
        <div className='modal-body'>
          <h2 className='title2'>{props.title}</h2>
          <p className='description'>{props.description}</p>

          <div className='footer-button'>
            <Button className='btn-default' onClick={props.cancelHandler}>
                {props.cancelButtonText}
            </Button>
            <Button type="primary" href={props.submitHandler}>
              {props.submitButtonText}
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}
