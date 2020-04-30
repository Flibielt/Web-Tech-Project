import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

class Fisherman extends EventEmitter {

    _fishermen = [];

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback){
        this.addListener('change',callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }
}

const fisherman = new Fisherman();

dispatcher.register((action) => {
    if (action.command.commandType === 'INSERT_FISHERMAN') {
        let newFisherman = action.command.fisherman;
        newFisherman.id = Math.round(Math.random() * 1000);
        fisherman._fishermen.push(newFisherman);
        fisherman.emitChange();
    } else if (action.command.commandType === 'GET_FISHERMAN') {
        axios.get("/fishermen")
            .then((response) => {
                fisherman._fishermen = response.data;
                fisherman.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
})

export default fisherman;
