import React, { useState } from 'react';
import { Button, Col, Row, Tabs, Menu } from 'antd';
import LayoutPrimary from '../../common/layoutPrimary';
import ConfirmationModal from '../../common/confirmationModal';
import PositionCard from '../../components/myDna/positionCard';

// images
import archiveIcon from "../../assets/icons/archive.svg";
import removeIcon from "../../assets/icons/remove.svg";

// Styles
import './styles.scss';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const operations = <Button type="primary" href="/add-new-position"> + Add New Position</Button>;


const positionCardData = [
  {
    designation: 'Engineering',
    positionTitleColor: '#CF3701',
  },
  {
    designation: 'Marketing',
    positionTitleColor: '#3F34D2',
  },
]

export default function MyDnaScreen() {
  const [isInviteConfirmModal, setIsInviteConfirmModal] = useState(false);
  const inviteConfirmModalToggle = () => {
    setIsInviteConfirmModal(!isInviteConfirmModal);
  };
  const [isInviteRemoveModal, setIsInviteRemoveModal] = useState(false);
  const inviteRemoveModalToggle = () => {
    setIsInviteRemoveModal(!isInviteRemoveModal);
  };

  return (
    <LayoutPrimary className='position-section'>
      <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
        <TabPane tab={<h1 className='tab-title'>Teams <span>3</span></h1>} key="1">
          <Row gutter={[10, 10]}>
            {positionCardData.map((data, index) => (
              <Col sm={6} key={index}>
                <PositionCard
                  positionTitleColor={data.positionTitleColor}
                  positionTitle={data.positionTitle}
                  designation={data.designation}
                  menuItems={<Menu className='position-card-dropdown'>
                    <Menu.Item>
                      <a href="#" onClick={inviteConfirmModalToggle}>
                        <img src={archiveIcon} className="img-icon" /> Archive
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a href="#" onClick={inviteRemoveModalToggle} className='remove'>
                        <img src={removeIcon} className="img-icon" />  Remove
                      </a>
                    </Menu.Item>
                  </Menu>}
                />
              </Col>
            ))}
          </Row>
        </TabPane>
        <TabPane tab={<h1 className='tab-title'>Archived <span>2</span></h1>} key="2">
          <Row gutter={[24, 24]}>
            {positionCardData.map((data, index) => (
              <Col sm={6} key={index}>
                <PositionCard positionTitle={data.positionTitle} designation={data.designation} />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>

      <ConfirmationModal
        title="Are your sure you want to archive this position?"
        description="This action is permanent and can’t be reverted"
        visible={isInviteConfirmModal}
        onCancel={inviteConfirmModalToggle}
        cancelHandler={inviteConfirmModalToggle}
        cancelButtonText="X Cancel"
        submitButtonText="Send invitation"
      />

      <ConfirmationModal
        title="Are your sure you want to remove this position?"
        description="This action is permanent and can’t be reverted"
        visible={isInviteRemoveModal}
        onCancel={inviteRemoveModalToggle}
        cancelHandler={inviteRemoveModalToggle}
        cancelButtonText="X Cancel"
        submitButtonText="Yes, I'm sure"
      />
    </LayoutPrimary>
  )
}
