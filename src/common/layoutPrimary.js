import React from 'react'
import { Layout, } from 'antd';
import logoFooter from "../assets/logo-brown.svg";
import linkedin from "../assets/icons/linkedin.png";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";

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
          <div className='copyright-section'>
            <div><img src={logoFooter} alt="logo-footer" /></div>
            <p className='copyright'>© Copyright 2021. UNBERRY. All Rights Reserved.</p>
          </div>

          <div className='social-sec'>
            <a href="https://www.linkedin.com/company/unberry/" target="_blank"><img className='icon' src={linkedin} /></a>
            <a href="https://www.instagram.com/unberry_official/" target="_blank"><img  className='icon'src={instagram} /></a>
            <a href="https://twitter.com/UnberryHQ" target="_blank"><img  className='icon'src={twitter} /></a>
          </div>
        </div>
      </Footer>}
    </Layout>
  )
}
