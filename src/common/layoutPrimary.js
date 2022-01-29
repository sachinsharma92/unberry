import React from 'react'
import { Layout, } from 'antd';
import logoFooter from "../assets/logo-brown.svg"

const { Content, Footer } = Layout;

export default function LayoutPrimary(props) {
  return (
    <Layout className="layout layout-primary">
      <Content className={`main-content-section ${props.className}`}>
        <div className="site-layout-content">
          {props.children}
        </div>
      </Content>
      {props.footer && <Footer>
        <div className='footer'>
          <div><img src={logoFooter} alt="logo-footer" /></div>
          <p className='copyright'>© Copyright 2021. UNBERRY. All Rights Reserved.</p>
        </div>
      </Footer>}
    </Layout>
  )
}
