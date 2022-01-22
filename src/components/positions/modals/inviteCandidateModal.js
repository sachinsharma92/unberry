import React from 'react';
import { Button, Input, Form, Select, Modal } from 'antd';

// Styles
import './styles.scss';


export default function InviteCandidateModal(props) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  
  return (
    <Modal wrapClassName="invite-candidate-modal" centered visible={props.visible} onCancel={props.onCancel} footer={false}>
      <div className='modal-body'>
        <h2 className='title2'>Invite a <br /> Candidate</h2>
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

          <Form.Item>
            <Select placeholder="Select">
              <Select.Option value="industry-experience">Industry Experience</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Invitation
            </Button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
