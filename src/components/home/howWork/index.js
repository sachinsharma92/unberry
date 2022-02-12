import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import lottie from "lottie-web";

import playRemotely from "../../../assets/json/play-remotely.json";
import customBenchmarks from "../../../assets/json/custom-benchmarks.json";
import detailedReports from "../../../assets/json/detailed-reports.json";

import playRemotelyIcon from "../../../assets/json/play-remotely.gif";
import customBenchmarksIcon from "../../../assets/json/custom-benchmarks.gif";
import detailedReportsIcon from "../../../assets/json/detailed-reports.gif";

// Styles
import './styles.scss';


export default function HowWorkCard() {
  const mediaboxData = [
  {
    number: '1',
    title: 'We create your custom screening benchmarks for assesment',
    description: 'To find out what ‘good’ looks like in each role within the company.',
    lottieID: "playRemotely",
    mobileIcon: playRemotelyIcon,
  },
  {
    number: '2',
    title: 'Candidates play remotely and get assessed immediately',
    description: 'A link with the automated Unberry gameplay takes care of everything.',
    lottieID: "customBenchmarks",
    mobileIcon: customBenchmarksIcon,
  },
  {
    number: '3',
    title: 'You get detailed reports with relevant, predictive insights',
    description: 'To identify right job-fits and high potential candidates early in the process',
    lottieID: "detailedReports",
    mobileIcon: detailedReportsIcon,
  }
]
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#playRemotely"),
      animationData: playRemotely
    });
    lottie.loadAnimation({
      container: document.querySelector("#customBenchmarks"),
      animationData: customBenchmarks
    });
    lottie.loadAnimation({
      container: document.querySelector("#detailedReports"),
      animationData: detailedReports
    });

  }, []);
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
              <div className='jsonIcon icon-style' id={item.lottieID} />
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
                <img src={item.mobileIcon} className='jsonIcon icon-style' id={item.lottieID} />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
