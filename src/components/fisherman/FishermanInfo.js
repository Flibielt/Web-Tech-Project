import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import CatchForm from "./catches/CatchForm";
import CatchList from "./catches/CatchList";
import Profile from "./profile/Profile";

class FishermanInfo extends Component{
    render() {
        return (
            <Tabs id={1}>
                <TabList>
                    <Tab>
                        Catch
                    </Tab>
                    <Tab>
                        Profile
                    </Tab>
                </TabList>
                <TabPanel>
                    <CatchForm/>
                    <CatchList/>
                </TabPanel>
                <TabPanel>
                    <Profile/>
                </TabPanel>
            </Tabs>
        );
    }
}

export default FishermanInfo;
