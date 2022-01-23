import React from 'react';
import { Col, Row, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import Traits from '../../../common/traits';

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

const traitsData = [
  {
    title: '50%',
    description: '48 Candidates',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '60%'
  },
  {
    title: '30%',
    description: '48 Candidates',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '40%'
  },
  {
    title: '16%',
    description: '48 Candidates',
    bgColor: '#60ECB1',
    textColor: '#00693D',
    percent: '20%'
  },
  {
    title: '4%',
    description: '48 Candidates',
    bgColor: '#FFDB8F',
    textColor: '#775100',
    percent: '10%'
  },
]

export default function PositionDetailCard(props) {
  return (
    <div className='position-sidebar-card'>

      <Link to='/my-dna' className='back-btn'>
        <ArrowLeftOutlined />  Back
      </Link>

      <Link to={props.cardHandler}>
        <Row>
          <Col sm={24}>
            <div className='head-sec'>
              <h2 className="title2 designation">{props.designation}</h2>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={8}>
            <div className='info-sec'>
              <h4 className='title'>120</h4>
              <p className="description">Invitations Sent</p>
            </div>
          </Col>
          <Col sm={8}>
            <div className='info-sec'>
              <h4 className='title'>108</h4>
              <p className="description">Gameplays Started</p>
            </div>
          </Col>

          <Col sm={8}>
            <div className='info-sec'>
              <h4 className='title'>96</h4>
              <p className="description">Gameplays Completed </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={24}>
            <div className='role-relevant-section'>
              <h4 className='title4'>Candidate performance</h4>
              <div className='progress-bar-section'>
                {traitsData.map((data, index) => (
                  <Traits key={index} description={data.description} title={data.title} bgColor={data.bgColor} percent={data.percent} textColor={data.textColor} />
                ))}
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col sm={24}>
            <p className="description created">Created 12 July 2021 • 10d ago</p>
          </Col>
        </Row>
      </Link>
    </div>
  )
}
