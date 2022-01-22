import React from 'react';
import { Col, Row, Menu, Button } from 'antd';
import { DownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// Styles
import './styles.scss';


const menu = (
  <Menu>
    <Menu.Item icon={<DownOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Archive
      </a>
    </Menu.Item>
    <Menu.Item icon={<DownOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Remove
      </a>
    </Menu.Item>
  </Menu>
);

export default function PositionDetailCard(props) {
  return (
    <div className='position-detail-card'>

      <Link to='/position' className='back-btn'>
        <ArrowLeftOutlined />  Back
      </Link>

      <Link to={props.cardHandler}>
        <Row>
          <Col sm={24}>
            <div className='head-sec'>
              <h4 className='title4 position-title' style={{ color: props.positionTitleColor }}>{props.positionTitle}</h4>
              <h2 className="title2 designation">{props.designation}</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <div className='info-sec'>
              <h4 className='title'>120</h4>
              <p className="description">Senior Backend Developer</p>
            </div>
          </Col>
          <Col sm={12}>
            <div className='info-sec'>
              <h4 className='title'>108</h4>
              <p className="description">Senior Backend Developer</p>
            </div>
          </Col>

          <Col sm={12}>
            <div className='info-sec'>
              <h4 className='title'>96</h4>
              <p className="description">Senior Backend Developer</p>
            </div>
          </Col>

          <Col sm={12}>
            <div className='info-sec'>
              <h4 className='title'>21</h4>
              <p className="description">Senior Backend Developer</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <p className="description created">Created 12 July 2021 • 10d ago</p>
          </Col>
        </Row>
      </Link>
    </div>
  )
}
