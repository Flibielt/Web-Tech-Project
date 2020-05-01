import React, {Component} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import CatchForm from "./catches/CatchForm";
import CatchList from "./catches/CatchList";
import Profile from "./profile/Profile";
import FishermanAction from "../../actions/FishermanAction";
import fishermanStore from "../../store/FishermanStore";

class FishermanInfo extends Component{
    constructor(props, context) {
        super(props, context);
        FishermanAction.getFisherman(1);
        this.state = {
            fisherman : {}
        }
        this.onChangeOfFisherman = this.onChangeOfFisherman.bind(this);
    }

    onChangeOfFisherman() {
        this.setState({
            fisherman : fishermanStore._fishermen
        })
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFisherman)
    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFisherman)
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
                    <CatchForm fishermanId = {this.state.fisherman.id}/>
                    <CatchList fishermanId = {this.state.fisherman.id}/>
                </TabPanel>
            </Tabs>
        );
    }
}

export default FishermanInfo;
