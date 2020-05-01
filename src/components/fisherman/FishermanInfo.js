import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import CatchForm from "./catches/CatchForm";
import CatchList from "./catches/CatchList";
import Profile from "./profile/Profile";

class FishermanInfo extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            fisherman : {
                firstName : 'John',
                lastName : 'Doe',
                equipment : 'Super Fishing pole',
                bait : 'Fishing bait',
                techniques: 'Super effective',
                fishingPoles : 'Fishing pole'
            }
        }
    }

    render() {
        return (
            <Tabs id={1}>
                <TabList>
                    <Tab>
                        Profile
                    </Tab>
                    <Tab>
                        Catch
                    </Tab>
                </TabList>
                <TabPanel className="m-3">
                    <Profile fisherman ={this.state.fisherman}/>
                </TabPanel>
                <TabPanel className="m-3">
                    <CatchForm/>
                    <CatchList/>
                </TabPanel>
            </Tabs>
        );
    }
}

export default FishermanInfo;
