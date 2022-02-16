import React, { useEffect, useState, useRef } from 'react';
import { Button, Col, Row, Form, Input, notification } from 'antd';
import axios from "axios";
import demoGroup from "../../assets/demo-group.png";

// Styles
import './styles.scss';
import { Mixpanel } from '../../services/mixpanel';


export default function DemoForm(props) {
  const [blogs, setBlogs] = useState([]);
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
        handleClick();
        Mixpanel.track('Demo Booked');
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

  useEffect(() => {
    const headers = {
      'Content-Type': 'text/plain',
      // 'Access-Control-Allow-Origin': '*'
    };

    axios.get('https://cms-api.unberry.com/api/v1/article', { headers }).then(res => {
      setBlogs(res?.data?.data)
    }).catch(err => {
      console.log('blog data err', err)
    })
  }, [])


  const handleClick = () => {
    window.open('https://calendly.com/unberry/30min');
  }

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
    </section>
  )
}
