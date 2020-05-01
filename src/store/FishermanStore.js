import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

import DATABASE_BASE_URL from "./Util";

class FishermanStore extends EventEmitter {

    _fisherman = {};
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
        fishermanStore._fisherman.push(newFisherman);
        fishermanStore.emitChange();
    } else if (action.command.commandType === 'GET_FISHERMAN') {
        axios.get(DATABASE_BASE_URL + "/fishermen/" + action.command.id)
            .then((response) => {
                console.log(response.data);
                fishermanStore._fisherman = response.data;
                fishermanStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    } else if (action.command.commandType === 'UPDATE_FISHERMAN') {
        fishermanStore._fisherman.push(action.command.fisherman);
        fishermanStore.emitChange();
    } else if (action.command.commandType === 'GET_FISHERMEN') {
        axios.get(DATABASE_BASE_URL + "/fishermen")
            .then((response) => {
                console.log(response.data);
                fishermanStore._fishermen = response.data;
                fishermanStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

export default fishermanStore;
