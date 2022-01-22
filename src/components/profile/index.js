import React from 'react';
import { Col, Row, Menu, Dropdown } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

// images
import archiveIcon from "../../assets/icons/archive.svg";
import removeIcon from "../../assets/icons/remove.svg";

// Styles
import './styles.scss';


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

export default function ProfileCard(props) {
  return (
    <div className='profile-card'>
      <Dropdown overlay={menu} placement="bottomRight" overlayClassName='position-custom-dropdown'>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <EllipsisOutlined />
        </a>
      </Dropdown>

      <Link to="/position-details">
        <Row gutter={24}>
          <Col sm={4}>
            <div className='shortname' style={{backgroundColor: props.bgColor}}>
              {props.shortName}
            </div>
          </Col>
          <Col sm={20}>
            <div className='info'>
              <h2 className='title2' style={{ color: props.positionTitleColor }}>{props.name}</h2>
              <p className="description">{props.position}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={24}>
            <p className="email-text">{props.emailID}</p>
          </Col>
        </Row>
      </Link>
    </div>
  )
}