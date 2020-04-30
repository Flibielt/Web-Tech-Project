import React, {Component} from 'react';
import catchStore from "../../../store/CatchStore";
import CatchAction from "../../../actions/CatchAction";

class CatchList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            catches : []
        };
        this.onChangeOfCatchList = this.onChangeOfCatchList.bind(this);
    }

    onChangeOfCatchList() {
        this.setState({
            catches : catchStore._catch
        })
    }

    componentDidMount() {
        catchStore.addChangeListener(this.onChangeOfCatchList());
    }

    componentWillUnmount() {
        catchStore.removeChangeListener(this.onChangeOfCatchList());
    }
}

export default CatchList;
