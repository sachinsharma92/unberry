import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import lottie from "lottie-web";
import preciseSignalIcon from "../../../assets/json/small/precise-signal.gif";
import fastEfficientIcon from "../../../assets/json/small/fast-efficient.gif";
import hiddenPoolsIcon from "../../../assets/json/small/hidden-pools.gif";
import longImpactIcon from "../../../assets/json/small/long-impact.gif";

import preciseSignal from "../../../assets/json/small/precise-signal.json";
import fastEfficient from "../../../assets/json/small/fast-efficient.json";
import hiddenPools from "../../../assets/json/small/hidden-pools.json";
import longImpact from "../../../assets/json/small/long-impact.json";

// Styles
import './styles.scss';


export default function WorkforceCard() {

  const textBoxData = [
    {
      lottieID: "preciseSignal",
      mobileIcon: preciseSignalIcon,
      title: 'A Much More Precise Signal',
      description: 'Improve the efficiency in Hiring. Reduce time to hire by 45% and cost to hire by 28%',
    },
    {
      lottieID: "fastEfficient",
      mobileIcon: fastEfficientIcon,
      title: 'Fast and Efficient Process',
      description: 'We increase yield in last round by upto 37%. Reduction in number of rounds by 21%',
      imgStyle: 'icon-style',
      iconStyle:'icon-scale'
    },
    {
      lottieID: "hiddenPools",
      mobileIcon: hiddenPoolsIcon,
      title: 'Access to Hidden Talent Pools',
      description: `Don't miss out on a great hire early in the process. 35% of them get rejected currently.`,
    },
    {
      lottieID: "longImpact",
      mobileIcon: longImpactIcon,
      title: 'Long Lasting Brand Impact',
      description: 'Candidates find game based assessments to be better experience by 95%.',
    }
  ]

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#preciseSignal"),
      animationData: preciseSignal
    });
    lottie.loadAnimation({
      container: document.querySelector("#fastEfficient"),
      animationData: fastEfficient
    });
    lottie.loadAnimation({
      container: document.querySelector("#hiddenPools"),
      animationData: hiddenPools
    });
    lottie.loadAnimation({
      container: document.querySelector("#longImpact"),
      animationData: longImpact
    });

  }, []);

  return (
    <div className='workforce-card'>
      <div className='grid-layout d-xs-none'>
        {textBoxData.map((item) => (
          <div className='box-style'>
            <div className='img-box'>
              <div className='jsonIcon icon-style' id={item.lottieID} />
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
                <img src={item.mobileIcon} className={`icon-style ${item.iconStyle}`} />
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
