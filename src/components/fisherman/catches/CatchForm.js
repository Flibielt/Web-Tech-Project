import React, {Component} from 'react';
import CatchAction from "../../../actions/CatchAction";

class CatchForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            location : '',
            weight : 1,
            species : ''
        }
    }

    render() {
        return (
            <table className="table">
                <tbody>
                <tr>
                    <td>Location</td>
                    <td><input
                        type="text"
                        value={this.state.location}
                        onChange={(e)=>{
                            this.setState({location : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Species</td>
                    <td><input
                        type="text"
                        value={this.state.species}
                        onChange={(e)=>{
                            this.setState({species : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td><input
                        type="number"
                        value={this.state.weight}
                        onChange={(e)=>{
                            if (e.target.value > 0) {
                                this.setState({weight: e.target.value});
                            }
                        }}
                    /></td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                        <button
                        className="btn btn-primary"
                        disabled={
                            this.state.location.length <= 0 || this.state.species.length <= 0
                        }
                        onClick={()=>{
                            if (this.state.location.length > 0)
                            CatchAction.newCatch(this.state)
                        }}
                        >Add catch</button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default CatchForm;
