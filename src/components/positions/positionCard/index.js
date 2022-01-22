import { Col, Row, Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import React from 'react';

// images
import archiveIcon from "../../../assets/icons/archive.svg";
import removeIcon from "../../../assets/icons/remove.svg";

// Styles
import './styles.scss';
import { Link } from 'react-router-dom';


const menu = (
  <Menu className='position-card-dropdown'>
    <Menu.Item>
      <a href="#">
        <img src={archiveIcon} className="img-icon" /> Archive
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className='remove'>
        <img src={removeIcon} className="img-icon" />  Remove
      </a>
    </Menu.Item>
  </Menu>
);

export default function PositionCard(props) {
  return (
    <div className='position-card'>
      <Dropdown overlay={menu} placement="bottomRight" overlayClassName='position-custom-dropdown'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <EllipsisOutlined />
        </a>
      </Dropdown>

      <Link to="/position-details">
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
