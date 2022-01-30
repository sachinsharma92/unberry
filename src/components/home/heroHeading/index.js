import { Carousel } from 'antd';
import React from 'react';
import workImg1 from "../../../assets/icons/work-img1.svg";
import workImg2 from "../../../assets/icons/work-img2.svg";
import workImg3 from "../../../assets/icons/work-img3.svg";

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

export default function HowWorkCard() {
  return (
    <div className='how-work-card'>
      <div className='media-section d-xs-none'>
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

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel autoplay>
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
        </Carousel>
      </div>
    </div>
  )
}
