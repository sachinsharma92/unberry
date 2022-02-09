import React from 'react';
import { Carousel } from 'antd';

// Styles
import './styles.scss';
import { Link } from 'react-router-dom';

export default function BlogCard(data) {
  console.log("🚀 ~ file: index.js ~ line 9 ~ BlogCard ~ data", data)
  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
        {data?.data?.map((item) => (
          <Link to={`/blog/${item.id}`}>
            <div className='box-style'>
              <div className='img-sec'>
                <img src={item.bannerImage} alt="" />
              </div>
              <div className='title'>
                {item.heading}
              </div>
              <div className='read-more-link'>Read More</div>
            </div>
          </Link>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel autoplay>
          {data?.data?.map((item) => (
            <Link to={`/blog/${item.id}`} className='read-more-link'>
              <div className='box-style'>
                <div className='img-sec'>
                  <img src={item.bannerImage} alt="" />
                </div>
                <div className='title'>
                  {item.heading}
                </div>
                <div className='read-more-link'>Read More</div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
