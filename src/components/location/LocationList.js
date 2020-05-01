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
        this.onChangeOfLocationList = this.onChangeOfLocationList.bind(this);
    }

    onChangeOfLocationList() {
        this.setState({
            locations : locationStore._locations
        });
    }

    componentDidMount() {
        locationStore.addChangeListener(this.onChangeOfLocationList);
    }

    componentWillUnmount() {
        locationStore.removeChangeListener(this.onChangeOfLocationList);
    }
}

export default LocationList;
