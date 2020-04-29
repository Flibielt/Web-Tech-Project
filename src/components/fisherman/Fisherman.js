import {Component} from "react";

class Fisherman extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fisherman : {
                name : '',
                certificateNumber : 1,
                address : '',
                phone : '',
                email : ''
            }
        }
    }
}

export default Fisherman;
