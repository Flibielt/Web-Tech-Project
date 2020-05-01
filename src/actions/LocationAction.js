import dispatcher from "../AppDispatcher";

class LocationAction {
    getLocations() {
        dispatcher.handleViewAction({
            commandType : 'GET_LOCATIONS'
        })
    }
}

export default new LocationAction();
