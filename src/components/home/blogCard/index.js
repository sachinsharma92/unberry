import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';

const BlogCard = ({data, currentPath}) => {
  const removeSpaces = (val) => {
    let arr = val.split(" ");
    return arr.join("-");
  }

  return (
    <div className='blog-card'>
      <div className='grid-layout d-xs-none'>
        {data?.map((item) => (
          <Link to={`/blog/${removeSpaces(item?.heading)}`} state={{backTo: currentPath, id: item?.id}}>
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
        <Carousel>
          {data?.map((item) => (
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
        </Carousel>
      </div>
    </div>
  )
}


export default BlogCard;