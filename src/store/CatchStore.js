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
