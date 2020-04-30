import EventEmitter from 'events';
import dispatcher from "../AppDispatcher";

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
