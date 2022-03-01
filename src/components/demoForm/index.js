import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Row, Form, Input, notification } from 'antd';
import axios from "axios";
import { Mixpanel } from '../../services/mixpanel';
import ThankModal from '../thankModal';
import demoGroup from "../../assets/demo-group.png";

// Styles
import './styles.scss';

export default function DemoForm(props) {
  const [isThankModal, setThankModal] = useState(false);
  const thankToggleModal = () => {
    setThankModal(!isThankModal);
  };
  
  const formRef = useRef(null);

  const openNotificationWithIcon = type => {
    notification[type]({
      message: 'Error',
      description:
        'Oops! Something went wrong',
    });
  };

  const bookADemo = (values) => {
    axios
      .post(
        "https://prod-api.unberry.com/api/query/v1/create-query",
        values, // the data to post'
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((response) => {
        // handleClick();
        formRef.current.resetFields();
        setThankModal(true);
        Mixpanel.track('Demo Booked');
        window.dataLayer.push({
          event: 'demoBooked',
        })
      })
      .catch((err) => {
        openNotificationWithIcon('error');
      });
  }

  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head.appendChild(script);
  }, []);


  // const handleClick = () => {
  //   window.open('https://calendly.com/unberry/product-demo');
  // }

  return (
    <section className='section-style contact-section' id={props.id} >
      <div className='menu-section'></div>
      <Row className='w-100'>
        <Col xs={24} sm={16}>
          <div className='gradint-section'>
            <img src={demoGroup} className='img-full' alt="" />
          </div>
        </Col>
        <Col xs={24} sm={8}>
          <div className='contact-form-section'>
            <div className='content'>
              <p className='text-sm'>Book a demo</p>
              <h4 className='title4'>Take the guesswork out…</h4>
              <p className='description'>Transform the way you hire - by taking out inefficiencies and biases. By switching to a smarter, unbiased, tech-driven and experiential way of hiring.</p>
            </div>

            <Form
              name="basic"
              autoComplete="off"
              layout="vertical"
              className='form-style'
              onFinish={bookADemo}
              preserve={false}
              ref={formRef}
              initialValues={{
                name: '',
                email: '',
                designation: ''
              }}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, }]}
              >
                <Input placeholder='Enter Name'
                //  value={name} onChange={e => setName(e.target.value)}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[{ type: 'email', required: true, }]}
              >
                <Input placeholder='Enter Email' />
              </Form.Item>

              <Form.Item
                name="designation"
                rules={[{ required: true, }]}
              >
                <Input placeholder='Role at company' />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" >
                  Get Started
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>

      <ThankModal visible={isThankModal} onCancel={thankToggleModal}/>
    </section>
  )
}
