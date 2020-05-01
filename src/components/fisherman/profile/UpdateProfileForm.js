import React, {Component} from 'react';

import FishermanAction from "../../../actions/FishermanAction";
import fishermanStore from "../../../store/FishermanStore";

class UpdateProfileForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fisherman : {}
        }
        this.onChangeOfFisherman = this.onChangeOfFisherman.bind(this);
    }

    onChangeOfFisherman() {
        this.setState({
            fisherman : fishermanStore._fisherman
        })
    }

    componentDidMount() {
        fishermanStore.addChangeListener(this.onChangeOfFisherman)
    }

    componentWillUnmount() {
        fishermanStore.removeChangeListener(this.onChangeOfFisherman)
    }
}
