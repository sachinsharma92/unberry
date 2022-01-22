import React from 'react';
import { Col, Row, Dropdown, Progress } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Traits from '../../../common/traits';

// Styles
import './styles.scss';

const traitsData = [
  {
    content: 'Learning Agility',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '90%'
  },
  {
    content: 'Ambiguity Tolerance',
    bgColor: '#A1FC9A',
    textColor: '#00590E',
    percent: '80%'
  },
  {
    content: 'Sustained Attention',
    bgColor: '#60ECB1',
    textColor: '#00693D',
    percent: '90%'
  },
  {
    content: 'Pateince',
    bgColor: '#FFDB8F',
    textColor: '#775100',
    percent: '70%'
  },
  {
    content: 'Context Switching',
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

      <Link to="/position-details">
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
              <Traits key={index} content={data.content} bgColor={data.bgColor} percent={data.percent} textColor={data.textColor} />
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
