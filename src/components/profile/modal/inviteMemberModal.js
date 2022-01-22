import React, { useState } from 'react';
import { Button, Input, Form, Modal } from 'antd';
import checkCircleIcon from "../../../assets/icons/check-circle.svg";

// Styles
import './styles.scss';

export default function InviteMemberModal(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Modal wrapClassName="invite-candidate-modal" maskStyle={{background: 'rgba(0,0,0,0.8)'}} centered visible={props.visible} onCancel={props.onCancel} footer={false}>
        <div className='modal-body'>
          <h2 className='title2'>Invite a <br /> Member</h2>
          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder='Name' />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ type: 'email', message: 'Please enter correct email!' }]}
            >
              <Input placeholder='Email' />
            </Form.Item>

            <Form.Item
              name="designation"
              rules={[{ required: true, message: 'Please enter your designation!' }]}
            >
              <Input placeholder='Designation' />
            </Form.Item>

            <Form.Item>
              <Button type="primary" onClick={props.invitationHandler}>
                Send invitation
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </>
  )
}
