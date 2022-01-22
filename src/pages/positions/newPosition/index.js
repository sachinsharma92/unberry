import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input, Button, Checkbox } from 'antd';
import LogoPrimary from "../../../common/logoPrimary"
import illustration from "../../../assets/illustration/login.svg"

// Styles
import './styles.scss';

export default function NewPositionScreen() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='new-position-section'>
      <Row>
        <Col sm={10}>
          <div className="left-section">
            <div className="content-section">
              <h1 className="title1"> Add a <br />  new <br />  position</h1>
              <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </Col>
        <Col sm={14}>
          <div className="right-section">
            <div className="form-section">
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <div className='title-section'>
                  <h4 className='title4'>Job Profile</h4>
                </div>

                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  className='form-inline'
                >
                  <Input placeholder='Position title' />
                </Form.Item>

                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  className='form-inline'
                >
                  <Input placeholder='Experience' />
                </Form.Item>

                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  className='form-inline'
                >
                  <Input placeholder='Industry' />
                </Form.Item>

                <div className='title-section'>
                  <h4 className='title4'>Job Description <span>Optional*</span></h4>
                </div>

                <Form.Item
                  name="description"
                  className='form-inline'
                >
                  <Input.TextArea placeholder='Add description' />
                </Form.Item>

                <div className='title-section'>
                  <h4 className='title4'>unberry Gameplay</h4>
                  <p className='description'>Select position you want to enable the gameplay for</p>

                  <div className='tag-section'>
                    <div className='tag-default' to="/otp-verify">
                      Software Developer
                    </div>
                    <div className='tag-default' to="/otp-verify">
                      Designer
                    </div>
                  </div>
                </div>

                <div className='footer-button'>
                  <Link className='btn-default' to="/position">
                    x Cancel
                  </Link>

                  <Button type="primary" href="/otp-verify">
                    Save and continue →
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
