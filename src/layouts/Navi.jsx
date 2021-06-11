import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Container } from "semantic-ui-react";
import { Button, Segment } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
             <Menu inverted fixed="top" size="large">
        <Container>
          <Menu.Item name="building outline">
            <Icon name="building outline" size="large"/>
            HRMS
          </Menu.Item>
          <Menu.Item name="HOME" />
          <Menu.Item name="JOB ADVERTİMENTS" />
          <Menu.Item name="COMPAİNES" />
          <Menu.Menu position="right">
             <Menu.Item>
             <Segment inverted>
      <Button inverted color='green'>
      Sign Up
      </Button>
      <Button inverted color='orange'>
      Sign In
      </Button>
      </Segment>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
        </div>
    )
}
