import { Button, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import LayoutPrimary from '../../common/layoutPrimary';
import { Mixpanel } from '../../services/mixpanel';
import DemoForm from '../../components/demoForm';

// Images
import logoTheme from "../../assets/logo-brown.svg"

// Styles
import './styles.scss';

export default function BlogScreen() {

  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const { pathname } = useLocation();

  // https://schema.org/Article
  const seoMarkup = (data) => {
    const articleStructuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.heading,
      description: data.content,
      image: data.bannerImage,
      // datePublished: new Date("2021-09-04T09:25:01.340Z").toISOString(),
      author: {
        "@type": "Person",
        name: "Unberry",
        url: "https://unberry.com/",
      },
    };
    return JSON.stringify(articleStructuredData);
  }



  useEffect(() => {
    document.title = "Blogs | Unberry"
    Mixpanel.track('All Blogs Opened, Path: /blog')
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
    axios.get('https://cms-api.unberry.com/api/v1/article').then(res => {
      setBlogs(res?.data?.data)
      setIsLoading(false)
    }).catch(err => {
      console.log('blog data err', err)
      setIsLoading(false)
    })
  }, [])

  const removeSpaces = (val) => {
    let arr = val.split(" ");
    return arr.join("-");
  }


  return (
    <div className='blog-page-style'>

      <LayoutPrimary footer>
        <div className='mobile-header'>
          <Link to="/"><img src={logoTheme} className='logo-white' alt="logo" /></Link>
          <Button type="primary" href="#bookDemo" className='btn-demo'>Book Demo</Button>
        </div>

        {/* ======= Section Bury Biases ======= */}
        <section className='section-style section-bury'>
          <div className='menu-section'>
            <Link to="/" className='d-xs-none'><img src={logoTheme} alt="logo" /></Link>
          </div>
          <div className='content-section'>
            <div className='border-section border-bottom-first'>
              <div className='heading-section'>
                <h1 className='title1 text-gradient'><span className='mob-space'>Inside Unberry</span></h1>
              </div>
              <Button type="primary" href="#bookDemo" className='btn-demo d-xs-none'>Book Demo</Button>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retain and delelop talent</p>
            </div>
          </div>
        </section>

        {/* ======= Section Why Unberry ======= */}
        <section className='section-style blog-unberry'>
          {blogs.map((item) => (
            <div itemscope='' itemtype='https://schema.org/Blog' className='border-section'>
              <script type="application/ld+json">
                {seoMarkup(item)}
              </script>
              <div className='menu-section' />
              <div className='content-section'>
                <Row gutter={28} align="middle">
                  <Col xs={24} sm={8}>
                    <div className='blog-thumb-image' itemscope="" itemtype="https://schema.org/ImageObject">
                      <img itemprop='url' src={item.bannerImage} alt={item.heading}></img>
                    </div>
                  </Col>
                  <Col xs={24} sm={16}>
                    <div className='blog-content-item'>
                      <div className='title'>{item.heading}</div>
                      <div className='description'>{item.content}</div>
                      <Link to={`/blog/${removeSpaces(item?.heading)}`} state={{ backTo: pathname, id: item?.id }}>Read More</Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </section>

        <DemoForm id="bookDemo" />
      </LayoutPrimary>
    </div>
  )
}
