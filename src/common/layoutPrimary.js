import React from 'react'
import { Button, Layout, Menu, } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import LogoPrimary from './logoPrimary';
import { Link } from 'react-router-dom';
const { Header, Content } = Layout;

export default function LayoutPrimary(props) {
  return (
    <Layout className="layout">
      <Header className='header-primary'>
        <div className="logo" >
          <LogoPrimary className="logo-white" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['2']}>
          <Menu.Item key={'dashboard'}><Link to="/dashboard">Dashboard</Link></Menu.Item>
          <Menu.Item key={'positions'}><Link to="/position">Positions</Link></Menu.Item>
          <Menu.Item key={'myDna'}><Link to="/my-dna">My DNA</Link></Menu.Item>
          <Menu.Item key={'profile'}><Link to="/profile">Profile</Link></Menu.Item>
        </Menu>

        <div className='button-section'>
          <Button type="default" className='btn-gray'><span className='text-light'>000</span> Credits</Button>
          <Button type="link" className='btn-logout'>Logout <LoginOutlined /></Button>
        </div>
      </Header>
      <Content className={`main-content-section ${props.className}`}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  )
}
