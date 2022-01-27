import React from 'react';
import { Carousel } from 'antd';

// Styles
import './styles.scss';

const blogData = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imgUrl: 'https://marketinginsidergroup.com/wp-content/uploads/2020/08/iStock-1198931639-scaled.jpg',
  },
  {
    title: 'Lorem ipsum dolor sit amet, dolor sit amet',
    imgUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing ',
    imgUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  },
]

export default function BlogCard() {
  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
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

      {/* On Mobile */}
      <div className='d-xs-visible'>
        <Carousel>
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
        </Carousel>
      </div>
    </div>
  )
}
