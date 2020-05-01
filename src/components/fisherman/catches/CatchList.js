import React, {Component} from 'react';
import catchStore from "../../../store/CatchStore";
import FishCatch from "./fishCatch/FishCatch";
import CatchAction from "../../../actions/CatchAction";

class CatchList extends Component {
    constructor(props, context) {
        super(props, context);
        CatchAction.getCatches(this.props.fishermanId);
        this.state = {
            catches : []
        };
        this.onChangeOfCatchList = this.onChangeOfCatchList.bind(this);
    }

    onChangeOfCatchList() {
        this.setState({
            catches : catchStore._catches
        })
    }

    componentDidMount() {
        catchStore.addChangeListener(this.onChangeOfCatchList);
    }

    componentWillUnmount() {
        catchStore.removeChangeListener(this.onChangeOfCatchList);
    }

    render() {
        return (
            <table className="table table-bordered table-striped">
                <thead>
                <tr>
                    <th>Location</th>
                    <th>Timestamp</th>
                    <th>Species</th>
                    <th>Weight</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.catches.map((fishCatch)=>{
                        return(
                            <FishCatch key={fishCatch.timestamp}
                                catch = {fishCatch}
                                />
                        );
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default CatchList;
