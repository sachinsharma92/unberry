import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Form, Input, Button } from 'antd';
import LogoPrimary from "../../common/logoPrimary"
import illustration from "../../assets/illustration/login.svg"

// Styles
import './styles.scss';
import Otpinput from '../../common/otpinput';

export default function OtpVerifyScreen() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='auto-section'>
      <Row>
        <Col sm={12}>
          <div className="left-section">
            <LogoPrimary className="logo-white" />

            <img src={illustration} className="img-illustration" />

            <div className="content-section">
              <h1 className="title1">Enter <br /> unberry</h1>
              <p className="description">Game-based assessments for <br /> high-performance teams</p>
            </div>
          </div>
        </Col>
        <Col sm={12}>
          <div className="right-section">
            <div className="form-section">
              <h3 className='title3'>Verify with OTP</h3>
              <p className="description">Enter the 4 digit code sent to <span className="text-danger">neha+45@grappus.com</span></p>

              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                  className='form-inline'
                >
                   <Otpinput buttonTitle="Verify and continue" />

                </Form.Item>
                <p className="description">OTP expiring in <span className="text-danger"> 25s</span></p>
              </Form>
            </div>

            <div className="footer-section">
              <p className="description">Do not have an account? <Link to="/register-now">Register here</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
