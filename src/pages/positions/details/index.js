import React, { useState } from 'react';
import { Button, Col, Row, Input, Menu, Dropdown, Table, Form, Select, Space, Modal } from 'antd';
import { AudioOutlined, DownOutlined, EllipsisOutlined, CheckOutlined } from '@ant-design/icons';
import LayoutPrimary from '../../../common/layoutPrimary';
import PositionDetailCard from '../../../components/positions/positionDetailCard';

// Images
import gameIcon from '../../../assets/icons/game.svg';
import viewIcon from '../../../assets/icons/view.svg';
import sendIcon from '../../../assets/icons/send.svg';
import closeIcon from '../../../assets/icons/close.svg';
import shortIcon from '../../../assets/icons/short.svg';
import removeIcon from "../../../assets/icons/remove.svg";

// Styles
import './styles.scss';

const positionCardData = [
  {
    positionTitle: 'Engineering',
    designation: 'Senior Backend Developer',
    positionTitleColor: '#CF3701',
  },
]

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = value => console.log(value);

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank">
        <img src={viewIcon} className="img-icon" /> View Report
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">
        <img src={shortIcon} className="img-icon" />  Shortlist
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">
        <img src={closeIcon} className="img-icon" /> Reject
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank">
        <img src={sendIcon} className="img-icon" />  Resend Invite
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#" className='remove'>
        <img src={removeIcon} className="img-icon" />  Remove
      </a>
    </Menu.Item>
  </Menu>
);


const columns = [
  {
    title: 'Name',
    dataIndex: 'nameWithEmail',
    key: 'nameWithEmail',
  },
  {
    title: 'Experience',
    dataIndex: 'experience',
    key: 'experience',
  },
  {
    title: 'Date Invited',
    dataIndex: 'dateInvited',
    key: 'dateInvited',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size="middle">
        <Dropdown overlay={menu} overlayClassName='position-detail-dropdown'>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <EllipsisOutlined />
          </a>
        </Dropdown>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    nameWithEmail: <div className='table-name-email'><h4 className='title4'>Chandra Pratap Singh</h4> singh.chandrapratap@gmail.com</div>,
    experience: '2 Years',
    dateInvited: '22 July, 2021 • 5d ago',
    status: <div className='shortlisted'>Shortlisted <CheckOutlined /></div>,
  },
  {
    key: '2',
    nameWithEmail: <div className='table-name-email'><h4 className='title4'>Dhruv Goel</h4> dhruv@gmail.com</div>,
    experience: '2 Years',
    dateInvited: '22 July, 2021 • 5d ago',
    status: <div className='rejected'>Rejected</div>,
  },
  {
    key: '3',
    nameWithEmail: <div className='table-name-email'><h4 className='title4'>Anuj Birla</h4> anuj@gmail.com</div>,
    experience: '2 Years',
    dateInvited: '22 July, 2021 • 5d ago',
    status: <div className='recommended'>7.8 • Recommended</div>,
  },
  {
    key: '4',
    nameWithEmail: <div className='table-name-email'><h4 className='title4'>Joshua David</h4> joshua@gmail.com</div>,
    experience: '2 Years',
    dateInvited: '22 July, 2021 • 5d ago',
    status: <div className='game-start'>Game Started <img src={gameIcon} alt="game-icon" /></div>,
  },
  {
    key: '5',
    nameWithEmail: <div className='table-name-email'><h4 className='title4'>Neha Agarwal</h4> neha@gmail.com</div>,
    experience: '2 Years',
    dateInvited: '22 July, 2021 • 5d ago',
    status: <div className='invited'>Invited</div>,
  },
];

export default function PositionDetailScreen() {
  const [isInviteCandidateModal, setIsInviteCandidateModal] = useState(false);
  const inviteCandidateModalToggle = () => {
    setIsInviteCandidateModal(!isInviteCandidateModal);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <LayoutPrimary className='position-detail-section'>
      <Row>
        <Col sm={6}>
          {positionCardData.map((data, index) => (
            <div key={index}>
              <PositionDetailCard
                positionTitleColor={data.positionTitleColor}
                positionTitle={data.positionTitle}
                designation={data.designation}
                cardHandler="/position-details"
              />
            </div>
          ))}
        </Col>
        <Col sm={18}>
          <div className='content-section'>
            <div className='action-section'>
              <h2 className='title2'>5 Candidates</h2>
              <Button type="primary" onClick={inviteCandidateModalToggle}>+ Invite a Candidate</Button>
            </div>

            <div className='search-section'>
              <Search placeholder="input search text" onSearch={onSearch} />
              <div className='button-section'>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button className='dropdown-button'>All candidates <DownOutlined /></Button>
                </Dropdown>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <Button className='dropdown-button'>All status <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>

            <div className='table-section'>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </Col>
      </Row>

      <Modal wrapClassName="invite-candidate-modal" centered visible={isInviteCandidateModal} onCancel={inviteCandidateModalToggle} footer={false}>
        <div className='modal-body'>
          <h2 className='title2'>Invite a <br /> Candidate</h2>

          <Form
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input placeholder='Name' />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[{ type: 'email', message: 'Please enter correct email!' }]}
            >
              <Input placeholder='Email' />
            </Form.Item>

            <Form.Item>
              <Select placeholder="Select">
                <Select.Option value="industry-experience">Industry Experience</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send Invitation
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </LayoutPrimary>
  )
}
