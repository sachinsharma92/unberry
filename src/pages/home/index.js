import { Button, Col, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import LayoutPrimary from '../../common/layoutPrimary';

// Images
import logoFooter from "../../assets/logo-brown.svg"
import illustrationLine from "../../assets/illustration/line-orange.svg";
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


// Styles
import './styles.scss';

const mediaboxData = [
  {
    number: '1',
    title: 'We create your custom screening benchmarks for assesment',
    description : 'To find out what ‘good’ looks like in each role within the company.',
    imgUrl: workImg1,
  },
  {
    number: '2',
    title: 'Candidates play remotely and get assessed immediately',
    description : 'A link with the automated Unberry gameplay takes care of everything.',
    imgUrl: workImg2,
  },
  {
    number: '3',
    title: 'You get detailed reports with relevant, predictive insights',
    description : 'To find out what ‘good’ looks like in each role within the company.',
    imgUrl: workImg3,
  }
]

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
        <section className='section-style product-section'>
          <div className='menu-section'>
            <Link to="">02 The product</Link>
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
                  <img src={gameImage} className='product-img1' alt="" />
                </Col>
              </Row>
            </div>

            <Row gutter={50}>
              <Col sm={17}>
                <div className='video-image'>
                  <img src={videoImage1} className='img-full' alt="" />
                </div>
              </Col>
              <Col sm={7}>
                <div className="img-list">
                  <div className='list'>
                    <img src={img1} className='img-icon' alt="" />
                    <p className='description'>Dynamic Scenarios & Authentic responses</p>
                  </div>
                  <div className='list'>
                    <img src={img2} className='img-icon' alt="" />
                    <p className='description'>Beyond consciously self reported data</p>
                  </div>
                  <div className='list'>
                    <img src={img3} className='img-icon' alt="" />
                    <p className='description'>Exhaustive & Extensive Data Points</p>
                  </div>
                  <div className='list'>
                    <img src={img4} className='img-icon' alt="" />
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
                      <h1 className='title1'>New age traits for modern workplace traits</h1>
                    </div>
                  </div>
                </Col>
                <Col sm={7}>
                  <div className='video-image'>
                    <img src={videoImage2} className='product-img1' alt="" />
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
                  <div className='boxes-description'>
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
