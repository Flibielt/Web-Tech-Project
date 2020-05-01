import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

import DATABASE_BASE_URL from "./Util";

class CatchStore extends EventEmitter {

    _catches = [];

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

const catchStore = new CatchStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'INSERT_CATCH') {
        let newCatch = action.command.newCatch;
        newCatch.id = Math.round(Math.random() * 1000);
        newCatch.timestamp = new Date();
        axios.post(DATABASE_BASE_URL + "/catches", newCatch)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log("Error")
                console.log(err);
            })
        catchStore._catches.push(newCatch);
        catchStore.emitChange();
    } else if (action.command.commandType === 'GET_CATCHES') {
        axios.get(DATABASE_BASE_URL + "/fisherman/" + action.command.fishermanId + "/catches")
            .then((response) => {
                catchStore._catches = response.data;
                catchStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
})

export default catchStore;
