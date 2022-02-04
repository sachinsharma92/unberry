import React from 'react';
import { Carousel } from 'antd';
import potentialImage from "../../../assets/icons/potential.svg";
import preciseSignal from "../../../assets/icons/precise-signal.svg";
import FastEfficient from "../../../assets/icons/fast-efficient.svg";
import accessHidden from "../../../assets/icons/access-hidden.svg";
import longLasting from "../../../assets/icons/long-lasting.svg";

// Styles
import './styles.scss';

const textBoxData = [
  {
    imgUrl: preciseSignal,
    title: 'A Much More Precise Signal',
    description: 'Improve the efficiency in Hiring. Reduce time to hire by 45% and cost to hire by 28%',
  },
  {
    imgUrl: FastEfficient,
    title: 'Fast and Efficient Process',
    description: 'We increase yield in last round by upto 37%. Reduction in number of rounds by 21%',
    imgStyle: 'icon-style'
  },
  {
    imgUrl: accessHidden,
    title: 'Access to Hidden Talent Pools',
    description: `Don't miss out on a great hire early in the process. 35% of them get rejected currently.`,
  },
  {
    imgUrl: longLasting,
    title: 'Long Lasting Brand Impact',
    description: 'Candidates find game based assessments to be better experience by 95%.',
  }
]
export default function WorkforceCard() {
  return (
    <div className='workforce-card'>
      <div className='grid-layout d-xs-none'>
        {textBoxData.map((item) => (
          <div className='box-style'>
            <div className='img-box'>
              <img src={item.imgUrl} className='img-icon' alt="" />
            </div>
            <div className='number'>
              {item.number}
            </div>
            <div className='title'>
              {item.title}
            </div>
            <div className='description'>
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel autoplay>
          {textBoxData.map((item) => (
            <div className='box-style'>
              <div className='img-box'>
                <img className={item.imgStyle} src={item.imgUrl} alt="" />
              </div>
              <div className='number'>
                {item.number}
              </div>
              <div className='title'>
                {item.title}
              </div>
              <div className='description'>
                {item.description}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
