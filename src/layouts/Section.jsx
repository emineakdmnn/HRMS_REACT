import React from 'react'
import JobseekerList from '../pages/user/jobseeker/JobseekerList'
import EmployerList from '../pages/user/employer/EmployerList'
import JobAdvertList from '../pages/jobAdvert/JobAdvertList'
import JobPositionList from '../pages/jobAdvert/jobPosition/JobPositionList'
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from '../pages/user/candidate/CandidateList'



export default function Section() {
    return (
        <div>
           
           <Grid>
        <Grid.Row>
          <GridColumn size={15}>
            <JobseekerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <JobPositionList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={15}>
            <CandidateList />
          </GridColumn>
        </Grid.Row>
       
      </Grid>
    </div>
           
       
    )
}
