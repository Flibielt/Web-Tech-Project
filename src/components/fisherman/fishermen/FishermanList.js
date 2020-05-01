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

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>IFA ID</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Zipcode</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.fishermen.map((fisherman) => {
                        return (
                            <FishermanBio key={fisherman.id}
                                          fisherman = {fisherman}
                                          />
                        );
                    })
                }
                </tbody>
            </table>
        )
    }
}

export default FishermanList;
