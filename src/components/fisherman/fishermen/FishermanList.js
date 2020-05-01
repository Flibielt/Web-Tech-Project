import React, {Component} from 'react';
import fishermanStore from "../../../store/FishermanStore";
import FishermanBio from "./FishermanBio"
import FishermanAction from "../../../actions/FishermanAction";

class FishermanList extends Component {
    constructor(props, context) {
        super(props, context);
        FishermanAction.getFishermen();
        this.state = {
            fishermen : []
        };
        this.onChangeFishermanList = this.onChangeFishermanList.bind(this);
    }

    onChangeFishermanList() {
        this.setState({
            fishermen : fishermanStore._fishermen
        });
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeFishermanList);
    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeFishermanList);
    }
}

export default FishermanList;
