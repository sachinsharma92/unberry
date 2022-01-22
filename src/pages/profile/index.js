import React, { useState } from 'react';
import { Button, Col, Row, Tabs } from 'antd';
import LayoutPrimary from '../../common/layoutPrimary';
import grappusLogo from '../../assets/grappus.svg';
import { RiseOutlined } from '@ant-design/icons';
import ProfileCard from '../../components/profile';

// Styles
import './styles.scss';
import InviteMemberModal from '../../components/profile/modal/inviteMemberModal';
import ConfirmMemberModal from '../../components/profile/modal/confirmMemberModal';


const profileCardData = [
  {
    name: 'Anuj Birla',
    shortName: 'AB',
    bgColor: '#F7A261',
    position: 'Project Manager',
    emailID: 'anuj@grappus.com',
  },
  {
    name: 'Dhruv Goel',
    shortName: 'DG',
    bgColor: '#B448DB',
    position: 'Project Manager2',
    emailID: 'dhruv@grappus.com',
  },
  {
    name: 'Tanvi Hastir',
    shortName: 'TH',
    bgColor: '#603BFF',
    position: 'Human Resources',
    emailID: 'tanvi@grappus.com',
  },
  {
    name: 'Sachin Sharma',
    shortName: 'SS',
    bgColor:'#CA2C92',
    position: 'Frontend Developer',
    emailID: 'sachin@grappus.com',
  },
]

export default function ProfileScreen() {

  const [isInviteMemberModal, setIsInviteMemberModal] = useState(false);
  const inviteMemberModalToggle = () => {
    setIsInviteMemberModal(!isInviteMemberModal);
  };

  const [isInviteConfirmModal, setIsInviteConfirmModal] = useState(false);
  const inviteConfirmModalToggle = () => {
    setIsInviteConfirmModal(!isInviteConfirmModal);
    setIsInviteMemberModal(false);
  };

  return (
    <LayoutPrimary className='profile-section'>
      <div className='grappus-studio'>
        <Row align="middle">
          <Col sm={12}><img src={grappusLogo} /></Col>
          <Col sm={12}>
            <div className='studio-info'>
              <h2 className='title2'>120 credits</h2>
              <p className='description'>View transactions <RiseOutlined /></p>
            </div>
          </Col>
        </Row>
      </div>

      <div className='action-section'>
        <Row align="middle">
          <Col sm={12}><h3 className='title3'>Team members <span>3</span></h3></Col>
          <Col sm={12}>
            <div className="button-sec">
              <Button type="primary" onClick={inviteMemberModalToggle}>+ Invite a member</Button>
            </div>
          </Col>
        </Row>
      </div>

      <div className='profile-card-section'>
        <Row gutter={[24, 24]}>
          {profileCardData.map((data, index) => (
            <Col sm={6} key={index}><ProfileCard name={data.name} position={data.position} emailID={data.emailID} shortName={data.shortName} bgColor={data.bgColor} /></Col>
          ))}
        </Row>
      </div>

      <InviteMemberModal visible={isInviteMemberModal} invitationHandler={inviteConfirmModalToggle} onCancel={inviteMemberModalToggle}/>
      <ConfirmMemberModal visible={isInviteConfirmModal} onCancel={inviteConfirmModalToggle}/>
      
    </LayoutPrimary>
  )
}
