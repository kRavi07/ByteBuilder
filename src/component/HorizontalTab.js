import React from "react";
import { TabContainer, TabPane, Tabs, Tab } from "react-bootstrap";
import { Row, Col, Nav } from "react-bootstrap";
import { HStack, VStack } from "./BootstrapStack";
import "./style/horizontalTab.css";
const HorizontalTab = ({ props }) => {
  return (
    <TabContainer id="left-tabs-example" defaultActiveKey="first">
      <Row className="text-light">
        <Col sm={12}>
          <HStack>
            <Nav variant="pills" className="flex-row">
              {props.nav?.map((item, index) => {
                return (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={index} tabNav>
                      <HStack>
                        <div className="tabIcon">{item.icon}</div>
                        <div className="tabTitle">{item.title}</div>
                      </HStack>
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </HStack>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            {props.tab?.map((item, index) => {
              return (
                <TabPane eventKey={index} key={index}>
                  <Col sm={12}>
                    <VStack className="text-light">{item}</VStack>
                  </Col>
                </TabPane>
              );
            })}
          </Tab.Content>
        </Col>
      </Row>
    </TabContainer>
  );
};

export default HorizontalTab;
