import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

class CatchStore extends EventEmitter {

    _catch = [];

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
        catchStore._catch.push(newCatch);
        catchStore.emitChange();
    } else if (action.command.commandType === 'GET_CATCHES') {
        axios.get("/fisherman/" + action.command.fishermanId + "/catches")
            .then((response) => {
                catchStore._catch = response.data;
                catchStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            });
    }
})

export default catchStore;
