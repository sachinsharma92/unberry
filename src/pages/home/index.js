import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LayoutPrimary from '../../common/layoutPrimary';
import logoFooter from "../../assets/logo-brown.svg"
import illustrationLine from "../../assets/illustration/line-orange.svg";

import potentialImage from "../../assets/icons/potential.svg";
import hiresImage from "../../assets/icons/hires.svg"
import bestfitImage from "../../assets/icons/best-fit.svg"

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
            <Link to="" className='ant-btn-primary'>BOOK DEMO</Link>
          </div>
          <div className='content-section'>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title text-gradient'>Bury Biases</h1>
              </div>
              <Button type="primary" className='btn-demo'>Book Demo</Button>
            </div>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title-2 text-gradient'>Unbury Potential</h1>
              </div>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
              <img src={illustrationLine} className='img-style' />
            </div>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style why-unberry'>
          <div className='menu-section'>
            <Link to="">Why UnBerry</Link>
          </div>
          <div className='content-section'>
            <div className='header-section'>
              <h2 className="title2 text-gradient">“The hiring landscape is rapidly evolving.”</h2>
            </div>
            <div className='boxes-style'>
              <Row>
                <Col sm={8}>
                  <div className='icon-box-sec'>
                    <img src={potentialImage} alt="" />
                    <h4 className='title4'>Focus on potential</h4>
                    <p className='description'>Evidence suggests that nearly 50% applicants embellish their CVs, reducing the utility of résumés as initial screening tools.</p>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className='icon-box-sec border-section'>
                    <img src={hiresImage} alt="" />
                    <h4 className='title4'>Avoid bad hires</h4>
                    <p className='description'>46% of new hires failed within 18 months. 89% of them were due to attitude or personality issues.</p>
                  </div>
                </Col>

                <Col sm={8}>
                  <div className='icon-box-sec'>
                    <img src={bestfitImage} alt="" />
                    <h4 className='title4'>Identify your best-fit</h4>
                    <p className='description'>Top Performers yields up to 67% more productivity and profit. Know the key traits required for successful teams.</p>
                  </div>
                </Col>
              </Row>
            </div>
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
