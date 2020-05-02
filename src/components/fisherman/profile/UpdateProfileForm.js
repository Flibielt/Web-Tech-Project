import React, {Component} from 'react';

import FishermanAction from "../../../actions/FishermanAction";

class UpdateProfileForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            equipment: '',
            bait: '',
            techniques: '',
            fishingPoles: ''
        }
        this.isUpdateButtonDisabled = this.isUpdateButtonDisabled.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    isUpdateButtonDisabled() {
        return !this.state.equipment
            || !this.state.bait
            || !this.state.techniques
            || !this.state.fishingPoles;
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    });
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>Equipment</td>
                    <td><input
                        type="text"
                        value={this.state.equipment}
                        name="equipment"
                        onChange={this.handleInputChange}
                    /></td>
                </tr>
                <tr>
                    <td>Baits</td>
                    <td><input
                        type="text"
                        value={this.state.bait}
                        name="bait"
                        onChange={this.handleInputChange}
                    /></td>
                </tr>
                <tr>
                    <td>Techniques</td>
                    <td><input
                        type="text"
                        value={this.state.techniques}
                        name="techniques"
                        onChange={this.handleInputChange}
                    /></td>
                </tr>
                <tr>
                    <td>Poles</td>
                    <td><input
                        type="text"
                        value={this.state.fishingPoles}
                        name="fishingPoles"
                        onChange={this.handleInputChange}
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
                                FishermanAction.updateFisherman(this.state);
                            }}
                        >Update profile</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default UpdateProfileForm;
