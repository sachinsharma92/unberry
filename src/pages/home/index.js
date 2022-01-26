import { Button, Col, Row, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LayoutPrimary from '../../common/layoutPrimary';
import lottie from "lottie-web";

// Images
import logoTheme from "../../assets/logo-brown.svg"
// import illustrationLine from "../../assets/illustration/line-orange.svg";
import potentialImage from "../../assets/icons/potential.svg";
import hiresImage from "../../assets/icons/hires.svg";
import bestfitImage from "../../assets/icons/best-fit.svg";
import gameImage from "../../assets/illustration/games.svg";
import img1 from "../../assets/icons/img1.svg";
import img2 from "../../assets/icons/img2.svg";
import img3 from "../../assets/icons/img3.svg";
import img4 from "../../assets/icons/img4.svg";
import videoImage1 from "../../assets/video-img1.png";
import videoImage2 from "../../assets/video-img2.jpg";
import profile1 from "../../assets/icons/profile1.svg";
import profile2 from "../../assets/icons/profile2.svg";
import profile3 from "../../assets/icons/profile3.svg";
import profile4 from "../../assets/icons/profile4.svg";
import workImg1 from "../../assets/icons/work-img1.svg";
import workImg2 from "../../assets/icons/work-img2.svg";
import workImg3 from "../../assets/icons/work-img3.svg";

// Lottie Animation
import bannerJson from "../../assets/json/banner.json";
import focusJson from "../../assets/json/focus.json";
import hireJson from "../../assets/json/hire.json";
import bestfitJson from "../../assets/json/bestfit.json";

import dynamicJson from "../../assets/json/dynamic.json";
import beyondJson from "../../assets/json/beyond.json";
import exhaustiveJson from "../../assets/json/exhaustive.json";
import psychology from "../../assets/json/psychology.json";

// Videos here
import unberryMix from "../../assets/video/unberry-mix.mp4";
import spiderGraph from "../../assets/video/spider-graph.mp4";



// Styles
import './styles.scss';

const mediaboxData = [
  {
    number: '1',
    title: 'We create your custom screening benchmarks for assesment',
    description: 'To find out what ‘good’ looks like in each role within the company.',
    imgUrl: workImg1,
  },
  {
    number: '2',
    title: 'Candidates play remotely and get assessed immediately',
    description: 'A link with the automated Unberry gameplay takes care of everything.',
    imgUrl: workImg2,
  },
  {
    number: '3',
    title: 'You get detailed reports with relevant, predictive insights',
    description: 'To find out what ‘good’ looks like in each role within the company.',
    imgUrl: workImg3,
  }
]

const textBoxData = [
  {
    title: 'A Much More Precise Signal',
    description: 'Improve the efficiency in Hiring. Reduce time to hire by 45% and cost to hire by 88%',
  },
  {
    title: 'Fair and Unbiased Process',
    description: 'Widen your sourcing pool with a fair and unbiased way of hiring. Increase diversity by 56%',
  },
  {
    title: 'Access to Hidden Talent Pools',
    description: '46% of people hired are bad hires. Candidate Retention Increases by 77%',
  },
  {
    title: 'Long Lasting Brand Impact',
    description: 'Candidates find game based assessments to be better experience by 95%.',
  }
]

const blogData = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imgUrl: 'https://marketinginsidergroup.com/wp-content/uploads/2020/08/iStock-1198931639-scaled.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet, dolor sit amet',
    imgUrl: 'https://marketinginsidergroup.com/wp-content/uploads/2020/08/iStock-1198931639-scaled.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    imgUrl: 'https://marketinginsidergroup.com/wp-content/uploads/2020/08/iStock-1198931639-scaled.jpg',
  },
]

export default function HomeScreen() {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie-banner"),
      animationData: bannerJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#focus1"),
      animationData: focusJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#hires2"),
      animationData: hireJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#bestfit3"),
      animationData: bestfitJson
    });

    lottie.loadAnimation({
      container: document.querySelector("#dynamic"),
      animationData: dynamicJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#beyond"),
      animationData: beyondJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#exhaustive"),
      animationData: exhaustiveJson
    });
    lottie.loadAnimation({
      container: document.querySelector("#psychology"),
      animationData: psychology
    });
  }, []);

  return (
    <div className='home-section-style'>
      <LayoutPrimary>

        <div className='mobile-header'>
          <Link to=""><img src={logoTheme} className='logo-white' alt="logo" /></Link>
          <Button type="primary" className='btn-demo'>Book Demo</Button>
        </div>

        {/* ======= Section ======= */}
        <section className='section-style section-bury'>
          <div className='menu-section'>
            <Link to="" className='d-xs-none'><img src={logoTheme} alt="logo" /></Link>
            <Link to="">Intro 01</Link>
            <Link to="" className='ant-btn-primary d-xs-none'>BOOK DEMO</Link>
          </div>
          <div className='content-section'>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title1 text-gradient'>Bury Biases</h1>
              </div>
              <Button type="primary" className='btn-demo d-xs-none'>Book Demo</Button>
            </div>
            <div className='border-bottom'>
              <div className='heading-section'>
                <h1 className='title1 bold text-gradient'>Unbury Potential</h1>
              </div>
            </div>

            <div className='illustration-section'>
              <p className='description'>Combining Game technology, Data science, & Neuroscience to disrupt the way companies recruit, retail and delelop talent</p>
              <div className='banner-lottie' id="lottie-banner" />
            </div>
          </div>
        </section>

        {/* ======= Section Why Unberry ======= */}
        <section className='section-style why-unberry'>
          <div className='menu-section'>
            <Link to="">02 Why UnBerry</Link>
          </div>
          <div className='content-section'>
            <div className='header-section'>
              <div className="title-lg text-gradient">“The hiring landscape is rapidly evolving.”</div>
            </div>
            <div className='boxes-style'>
              <Row>
                <Col sm={8}>
                  <div className='icon-box-sec'>
                    {/* <img src={potentialImage} alt="" /> */}
                    <div className='jsonIcon' id="focus1" />
                    <h4 className='title4'>Focus on potential</h4>
                    <p className='description'>Evidence suggests that nearly 50% applicants embellish their CVs, reducing the utility of résumés as initial screening tools.</p>
                  </div>
                </Col>
                <Col sm={8}>
                  <div className='icon-box-sec border-section'>
                    {/* <img src={hiresImage} alt="" /> */}
                    <div className='jsonIcon' id="hires2" />
                    <h4 className='title4'>Avoid bad hires</h4>
                    <p className='description'>46% of new hires failed within 18 months. 89% of them were due to attitude or personality issues.</p>
                  </div>
                </Col>

                <Col sm={8}>
                  <div className='icon-box-sec'>
                    {/* <img src={bestfitImage} alt="" /> */}
                    <div className='jsonIcon' id="bestfit3" />
                    <h4 className='title4'>Identify your best-fit</h4>
                    <p className='description'>Top Performers yields up to 67% more productivity and profit. Know the key traits required for successful teams.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* ======= Section Product  ======= */}
        <section className='section-style product-section'>
          <div className='menu-section'>
            <Link to="">03 The product</Link>
          </div>
          <div className='content-section'>
            <div className='sec-first'>
              <Row gutter={50} className='h-100'>
                <Col sm={17}>
                  <div className='heading-section'>
                    <h1 className='description'>Meet Unberry</h1>
                    <h1 className='title1'>Game based assessments for high performing teams</h1>
                  </div>
                </Col>
                <Col sm={7}>
                  <div className='img-center'>
                  <img src={gameImage} className='product-img1' alt="" />
                  </div>
                </Col>
              </Row>
            </div>

            <Row gutter={50}>
              <Col sm={17}>
                <div className='video-image'>
                  <video width="100%" height="100%" muted autoPlay loop playsInline>
                    <source src={unberryMix} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <img src={videoImage1} className='img-full' alt="" />
                </div>
              </Col>
              <Col sm={7}>
                <div className="img-list">
                  <div className='list'>
                    <div className='img-icon' id="dynamic" />
                    <p className='description'>Dynamic Scenarios & Authentic responses</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="beyond" />
                    <p className='description'>Beyond consciously self reported data</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="exhaustive" />
                    <p className='description'>Exhaustive & Extensive Data Points</p>
                  </div>
                  <div className='list'>
                    <div className='img-icon' id="psychology" />
                    <p className='description'>Based on validated principles of psychology</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style product-section-2'>
          <div className='menu-section'>
            <Link to="">04 The Competency Traits</Link>
          </div>
          <div className='content-section'>
            <div className='first-section'>
              <Row gutter={50}>
                <Col sm={17}>
                  <div className='heading-section'>
                    <div className='text-sec'>
                      <p className='description'>The Competency Traits</p>
                      <h1 className='title1'>New age traits for <br /> modern workplace traits</h1>
                    </div>
                  </div>
                </Col>
                <Col sm={7}>
                  <div className='video-image'>
                    <video width="100%" height="100%" muted autoPlay loop playsInline>
                      <source src={spiderGraph} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className='boxes-description d-xs-visible'>
                    <p className='description'>We report cognitive and personality traits to predict real-world outcomes, all based on neuroscience and psychology principles.</p>
                  </div>
                </Col>
              </Row>
            </div>

            <div className='second-section'>
              <Row gutter={50} className='h-100'>
                <Col sm={17}>
                  <div className='profile-boxes'>
                    <div className='profile-box-style'>
                      <img src={profile1} className='img-icon' alt="" />
                      <div className='text-sec'>
                        <h4 className='title4'>Cognitive Profile</h4>
                        <p className='description'>How they process information & knowledge mentally</p>
                      </div>
                    </div>
                    <div className='profile-box-style'>
                      <img src={profile2} className='img-icon' alt="" />
                      <div className='text-sec'>
                        <h4 className='title4'>Thinking Profile</h4>
                        <p className='description'>How they learn concepts & organise their thoughts </p>
                      </div>
                    </div>
                    <div className='profile-box-style'>
                      <img src={profile3} className='img-icon' alt="" />
                      <div className='text-sec'>
                        <h4 className='title4'>Intelligence Profile</h4>
                        <p className='description'>How they isolate and navigate complex problems</p>
                      </div>
                    </div>
                    <div className='profile-box-style'>
                      <img src={profile4} className='img-icon' alt="" />
                      <div className='text-sec'>
                        <h4 className='title4'>Behavioural Profile</h4>
                        <p className='description'>How they control and conduct themselves </p>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col sm={7}>
                  <div className='boxes-description d-xs-none'>
                    <p className='description'>We report cognitive and personality traits to predict real-world outcomes, all based on neuroscience and psychology principles.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style how-works'>
          <div className='menu-section'>
            <Link to="">05 How it works</Link>
          </div>

          <div className='content-section'>
            <div className='heading-section'>
              <h1 className='title1 text-gradient'>“Here's how Unberry works and it’s simply a game changer”</h1>
            </div>

            <div className='media-section'>
              {mediaboxData.map((item) => (
                <div className='media-box'>
                  <div className='number'>
                    {item.number}
                  </div>
                  <div className='title'>
                    {item.title}
                  </div>
                  <div className='description'>
                    {item.description}
                  </div>
                  <div className='img-sec'>
                    <img src={item.imgUrl} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style why-unberry-2'>
          <div className='menu-section'>
            <Link to="">06 Why UnBerry</Link>
          </div>
          <div className='content-section'>
            <Row>
              <Col xs={24} sm={7}>
                <div className='heading-section'>
                  <img src={potentialImage} className='img-icon' alt="" />
                  <h1 className='title1 text-gradient'>Find the <br /> Perfect <br /> Talent for <br /> Your <br /> Workforce</h1>
                </div>
              </Col>
              <Col xs={24} sm={17}>
                <div className='content-box-section'>
                  {textBoxData.map((item) => (
                    <div className='box-style'>
                      <div className='number'>
                        {item.number}
                      </div>
                      <div className='title'>
                        {item.title}
                      </div>
                      <div className='description'>
                        {item.description}
                      </div>
                      <div className='img-sec'>
                        <img src={item.imgUrl} alt="" />
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* ======= Section ======= */}
        <section className='section-style blog-section'>
          <div className='menu-section'>
            <Link to="">07 Blogs</Link>
          </div>

          <div className='content-section'>

            <div className='heading-section'>
              <h1 className='title1'>Blog section title goes here</h1>
              <div className='view-all'><a href="">View All</a></div>
            </div>

            <div className='content-box-section'>
              {blogData.map((item) => (
                <div className='box-style'>
                  <div className='img-sec'>
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className='title'>
                    {item.title}
                  </div>
                  <a href="" className='read-more-link'>Read More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='section-style contact-section'>
          <div className='menu-section'></div>
          <Row className='w-100'>
            <Col xs={24} sm={16}>
            <div className='black-section'></div>
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
                >
                  <Form.Item
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name!' }]}
                  >
                    <Input placeholder='Anuj Birla' />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    rules={[{ type: 'email', message: 'Please enter your email!' }]}
                  >
                    <Input placeholder='anuj.birla@unberry.com' />
                  </Form.Item>

                  <Form.Item
                    name="role"
                    rules={[{ required: true, message: 'Please enter your role!' }]}
                  >
                    <Input placeholder='Role at company' />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Get Started
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </section>
      </LayoutPrimary>
    </div>
  )
}
