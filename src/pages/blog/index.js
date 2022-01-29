import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LayoutPrimary from '../../common/layoutPrimary';

// Images
import logoTheme from "../../assets/logo-brown.svg"

// Styles
import './styles.scss';

const blogData = [
  {
    imgUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1627855437292-7efeee237b12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1547638375-ebf04735d792?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    imgUrl: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2FtZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
]

export default function BlogScreen() {

  return (
    <div className='blog-page-style'>
      <LayoutPrimary>

        <div className='mobile-header'>
          <Link to="/"><img src={logoTheme} className='logo-white' alt="logo" /></Link>
          <Button type="primary" className='btn-demo'>Book Demo</Button>
        </div>

        {/* ======= Section Bury Biases ======= */}
        <section className='section-style section-bury'>
          <div className='menu-section'>
            <Link to="/" className='d-xs-none'><img src={logoTheme} alt="logo" /></Link>
          </div>
          <div className='content-section'>
            <div className='border-section border-bottom-first'>
              <div className='heading-section'>
                <h1 className='title1 text-gradient'><span className='mob-space'>Blog title</span></h1>
              </div>
              <Button type="primary" className='btn-demo d-xs-none'>Book Demo</Button>
            </div>
            <div className='border-section border-bottom-second'>
              <div className='heading-section'>
                <h1 className='title1 bold text-gradient'><span className='line-bottom'>Blogs </span> <span className='mob-space'>title</span></h1>
              </div>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
            </div>
          </div>
        </section>

        {/* ======= Section Why Unberry ======= */}
        <section className='section-style blog-unberry'>

          {blogData.map((item) => (
            <div className='border-section'>
              <div className='menu-section' />
              <div className='content-section'>
                <Row gutter={28}>
                  <Col xs={24} sm={7}>
                    <div className='blog-thumb-image'>
                      <img src={item.imgUrl} alt="blog-image"></img>
                    </div>
                  </Col>
                  <Col xs={24} sm={17}>
                    <div className='blog-content-item'>
                      <h3 className='title3'>{item.title}</h3>
                      <p className='description'>{item.description}</p>
                      <Link to="">Read More</Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}

          <div className='border-section empty-space'>
            <div className='menu-section' />
          </div>

        </section>
      </LayoutPrimary>
    </div>
  )
}
