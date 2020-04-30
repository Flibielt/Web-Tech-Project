import React, {Component} from 'react';
import CatchAction from "../../../actions/CatchAction";

class Catches extends Component {
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
                            this.setState({weight : e.target.value});
                        }}
                    /></td>
                </tr>
                <tr>
                    <td><button
                        className="btn btn-info"
                        onClick={()=>{CatchAction.newCatch(this.state)}}
                    >Add</button></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default Catches;
