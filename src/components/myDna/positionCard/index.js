import React from 'react';
import { Col, Row, Dropdown, Progress } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Traits from '../../../common/traits';

// Styles
import './styles.scss';

const traitsData = [
  {
    title: 'Learning Agility',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '90%'
  },
  {
    title: 'Ambiguity Tolerance',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '80%'
  },
  {
    title: 'Sustained Attention',
    bgColor: '#60ECB1',
    textColor: '#00693D',
    percent: '90%'
  },
  {
    title: 'Pateince',
    bgColor: '#FFDB8F',
    textColor: '#775100',
    percent: '70%'
  },
  {
    title: 'Context Switching',
    bgColor: '#FE9EAB',
    textColor:'#71000F',
    percent: '40%'
  }

]

export default function PositionCard(props) {
  return (
    <div className='my-dna-position-card'>
      <Dropdown overlay={props.menuItems} placement="bottomRight" overlayClassName='position-custom-dropdown'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <EllipsisOutlined />
        </a>
      </Dropdown>

      <Link to="/my-dna-detail">
        <Row>
          <Col sm={24}>
            <div className='head-sec'>
              <h2 className="title2 designation">{props.designation}</h2>
            </div>
          </Col>
        </Row>

        <Row justify="space-between">
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

        <div className='role-relevant-section'>
          <h4 className='title4'>Role Relevant Traits</h4>
          <div className='progress-bar-section'>
            {traitsData.map((data, index) => (
              <Traits key={index} title={data.title} bgColor={data.bgColor} percent={data.percent} textColor={data.textColor} className="line-active" />
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
