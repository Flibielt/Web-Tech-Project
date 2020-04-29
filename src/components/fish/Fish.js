import {Component} from "react";

class Fish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fish : {
                species : '',
                weight : 1,
                address : '',
                phone : '',
                email : ''
            }
        }
    }
}

export default Fish;
