import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

import DATABASE_BASE_URL from "./Util";

class FishermanStore extends EventEmitter {

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

const fishermanStore = new FishermanStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'INSERT_FISHERMAN') {
        let newFisherman = action.command.fisherman;
        newFisherman.id = Math.round(Math.random() * 1000);
        fishermanStore._fishermen.push(newFisherman);
        fishermanStore.emitChange();
    } else if (action.command.commandType === 'GET_FISHERMAN') {
        axios.get(DATABASE_BASE_URL + "/fishermen/" + action.command.id)
            .then((response) => {
                console.log(response.data);
                fishermanStore._fishermen = response.data;
                fishermanStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (action.command.commandType === 'UPDATE_FISHERMAN') {
        fishermanStore._fishermen.push(action.command.fisherman);
        fishermanStore.emitChange();
    }
})

export default fishermanStore;
