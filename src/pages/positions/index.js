import React from 'react';
import { Button, Col, Row, Tabs } from 'antd';
import LayoutPrimary from '../../common/layoutPrimary';
import PositionCard from '../../components/positions/positionCard';

// Styles
import './styles.scss';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const operations = <Button type="primary"> + Add New Position</Button>;


const positionCardData = [
  {
    positionTitle: 'Engineering',
    designation: 'Senior Backend Developer',
    positionTitleColor: '#CF3701',
  },
  {
    positionTitle: 'Design',
    designation: 'UI UX Designer',
    positionTitleColor: '#3F34D2',
  },
  {
    positionTitle: 'MBA',
    designation: 'Sales and Marketing Strategist',
    positionTitleColor: '#ED7A0F',
  },
]

export default function PositionScreen() {
  return (
    <LayoutPrimary className='position-section'>
      <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
        <TabPane tab={<h1 className='tab-title'>Gameplay Positions <span>3</span></h1>} key="1">
          <Row gutter={[24, 24]}>
            {positionCardData.map((data, index) => (
              <Col sm={6} key={index}>
                <PositionCard positionTitleColor={data.positionTitleColor} positionTitle={data.positionTitle} designation={data.designation} />
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
    </LayoutPrimary>
  )
}
