import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

import axios from 'axios';

const DATABASE_BASE_URL = 'http://localhost:3001';

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
