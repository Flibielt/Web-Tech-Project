import React, {Component} from 'react';
import fishermanStore from "../../../store/FishermanStore";
import FishermanBio from "./FishermanBio"
import FishermanAction from "../../../actions/FishermanAction";

class FishermanList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            fishermen : []
        };
    }
}
