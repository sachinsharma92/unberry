import React from 'react';
import { Carousel } from 'antd';

// Styles
import './styles.scss';
import { Link } from 'react-router-dom';

export default function BlogCard(data) {
  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
        {data?.data?.map((item) => (
          <div className='box-style'>
            <div className='img-sec'>
              <img src={item.mainPictureURL} alt="" />
            </div>
            <div className='title'>
              {item.title}
            </div>
            <Link to={`/blog/${item.id}`} className='read-more-link'>Read More</Link>
          </div>
        ))}
      </div>

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel>
          {data?.data?.map((item) => (
            <div className='box-style'>
              <div className='img-sec'>
                <img src={item.mainPictureURL} alt="" />
              </div>
              <div className='title'>
                {item.title}
              </div>
              <Link to={`/blog/${item.id}`} className='read-more-link'>Read More</Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
