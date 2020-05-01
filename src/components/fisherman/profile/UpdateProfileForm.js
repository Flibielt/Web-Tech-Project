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
        this.isUpdateButtonDisabled = this.isUpdateButtonDisabled.bind(this);
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

    isUpdateButtonDisabled() {
        return this.state.fisherman.firstName.length < 1
            || this.state.fisherman.lastName.length < 1
            || this.state.fisherman.equipment.length < 1
            || this.state.fisherman.bait.length < 1
            || this.state.fisherman.techniques.length < 1
            || this.state.fisherman.fishingPoles.length < 1;
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>First name</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.firstName}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    firstName : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Last name</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.lastName}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    firstName : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Equipment</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.equipment}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    equipment : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Baits</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.bait}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    bait : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Techniques</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.techniques}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    techniques : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Poles</td>
                    <td><input
                        type="text"
                        value={this.state.fisherman.fishingPoles}
                        onChange={(e)=>{
                            this.setState({fisherman : {
                                    fishingPoles : e.target.value
                                }
                            });
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <button
                            className="btn btn-primary"
                            disabled={this.isUpdateButtonDisabled()}
                            onClick={()=>{
                                FishermanAction.updateFisherman(this.state.fisherman);
                            }}
                        >Add catch</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default UpdateProfileForm;
