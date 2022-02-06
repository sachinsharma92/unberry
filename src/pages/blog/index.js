import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import LayoutPrimary from '../../common/layoutPrimary';
import { Mixpanel } from '../../services/mixpanel';

// Images
import logoTheme from "../../assets/logo-brown.svg"

// Styles
import './styles.scss';

export default function BlogScreen() {

  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    Mixpanel.track('Blog Page Opened~')
  }, [])


  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [])
  
  useEffect(() => {
    setIsLoading(true)
    axios.get('https://cms-api.unberry.com/api/v1/collection').then(res=>{
      setBlogs(res?.data?.data)
      setIsLoading(false)
    }).catch(err=>{
      console.log('blog data err', err)
      setIsLoading(false)
    })
  }, [])

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

          {blogs.map((item) => (
            <div className='border-section'>
              <div className='menu-section' />
              <div className='content-section'>
                <Row gutter={28}>
                  <Col xs={24} sm={7}>
                    <div className='blog-thumb-image'>
                      <img src={item.mainPictureURL} alt={item.title}></img>
                    </div>
                  </Col>
                  <Col xs={24} sm={17}>
                    <div className='blog-content-item'>
                      <h3 className='title3'>{item.title}</h3>
                      <p className='description'>{item.description}</p>
                      <Link to={`/blog/${item.id}`}>Read More</Link>
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
