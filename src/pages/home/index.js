import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LayoutPrimary from '../../common/layoutPrimary';
import logoFooter from "../../assets/logo-brown.svg"
import illustrationLine from "../../assets/illustration/line-orange.svg"

// Styles
import './styles.scss';

export default function HomeScreen() {
  return (
    <div className='home-section-style'>
      <LayoutPrimary>

        {/* ======= Section ======= */}
        <section className='section-style section-bury'>
          <div className='menu-section'>
            <Link to=""><img src={logoFooter} alt="logo-footer" /></Link>
            <Link to="">Intro 01</Link>
            <Link to="">BOOK DEMO</Link>
          </div>
          <div className='content-section'>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title'>Bury Biases</h1>
              </div>
              <Button type="primary" className='btn-demo'>Book Demo</Button>
            </div>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title-2'>Unbury Potential</h1>
              </div>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
              <img src={illustrationLine} className='img-style' />
            </div>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">Why UnBerry</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">02 The product</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">03 The product</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">04 The Competency Traits</Link>
          </div>

          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">05 How it works</Link>
          </div>

          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>


        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">06 Why UnBerry</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>


        {/* ======= Section ======= */}
        <section className='section-style'>
          <div className='menu-section'>
            <Link to="">07 Blogs</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col sm={20}>
                <div className='heading-section'>
                  <h1 className='title1'>Bury Biases</h1>
                  <h1 className='title1'>Unbury Potential</h1>
                </div>
              </Col>
              <Col sm={4}>
                <Button type="primary">Book Demo</Button>
              </Col>
            </Row>
            <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
          </div>
        </section>


      </LayoutPrimary>
    </div>
  )
}
