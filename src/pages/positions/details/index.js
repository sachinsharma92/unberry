import { Button, Col, Row, Input, Menu, Dropdown, Table, Tag, Space } from 'antd';
import { AudioOutlined, DownOutlined, EllipsisOutlined } from '@ant-design/icons';
import React from 'react';
import LayoutPrimary from '../../../common/layoutPrimary';
import PositionDetailCard from '../../../components/positions/positionDetailCard';

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
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Experience',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Date Invited',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Status',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Dropdown overlay={menu}>
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
    name: 'Chandra Pratap Singh',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Chandra Pratap Singh',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Chandra Pratap Singh',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default function PositionDetailScreen() {
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
              <Button type="primary">+ Invite a Candidate</Button>
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
    </LayoutPrimary>
  )
}
