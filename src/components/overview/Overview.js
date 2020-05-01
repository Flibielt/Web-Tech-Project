import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import LocationList from "../location/LocationList";
import FishermanList from "../fisherman/fishermen/FishermanList";

class Overview extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <Tabs>
                <TabList>
                    <Tab>
                        Fishermen
                    </Tab>
                    <Tab>
                        Locations
                    </Tab>
                </TabList>
                <TabPanel>
                    <FishermanList/>
                </TabPanel>
                <TabPanel>
                    <LocationList/>
                </TabPanel>
            </Tabs>
        )
    }
}

export default Overview;
