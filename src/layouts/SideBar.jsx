import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'
export default function SideBar() {
    return (
     
        <div>
          <Menu inverted icon="labeled" vertical> 
                
              <Menu.Item
          name="building"
        >
            
          <Icon name="building" />
          JOB POSİTİON
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          JOBSEEKER
        </Menu.Item>

        <Menu.Item
          name="user"
        >
          <Icon name="user" />
          EMPLOYER
        </Menu.Item>
      </Menu>
        </div>
        
    )
}
