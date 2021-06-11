import React from 'react'
import SideBar from "./SideBar";
import Section from "./Section";
import { Grid } from "semantic-ui-react";
export default function Dashboard() {
    return (
        <div>
            
            <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <SideBar/>
          </Grid.Column>
          <Grid.Column width={14}>
              <Section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>

        </div>
    )
}
