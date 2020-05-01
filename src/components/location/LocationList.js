import React, {Component} from 'react';
import locationStore from "../../store/LocationStore";
import Location from "./Location"
import LocationAction from "../../actions/LocationAction";

class LocationList extends Component {
    constructor(props, context) {
        super(props, context);
        LocationAction.getLocations();
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

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Owner</th>
                    <th>Catches in last month</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.locations.map((location) => {
                        return (
                            <Location key={location.id}
                                      location ={location}
                                      />
                        );
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default LocationList;
