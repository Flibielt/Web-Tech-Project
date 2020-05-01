import React, {Component} from 'react';
import locationStore from "../../store/LocationStore";
import Location from "./Location"
import LocationAction from "../../actions/LocationAction";

class LocationList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            locations : []
        }
    }
}

export default LocationList;
