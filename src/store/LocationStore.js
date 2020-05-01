import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

import DATABASE_BASE_URL from "./Util";

class LocationStore extends EventEmitter {

    _locations = [];

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

const locationStore = new LocationStore();

dispatcher.register((action) => {
    if (action.command.commandType === 'GET_LOCATIONS') {
        axios.get(DATABASE_BASE_URL + "/locations")
            .then((response) => {
                locationStore._locations = response.data;
                locationStore.emitChange();
            })
            .catch((err) => {
                console.log(err);
            })
    }
})

export default locationStore;
