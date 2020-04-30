import dispatcher from "../AppDispatcher";

class FishermanAction {

    newFisherman(fisherman) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_FISHERMAN',
            fisherman : fisherman
        });
    }

    updateFisherman(fisherman) {
        dispatcher.handleViewAction({
            commandType : 'UPDATE_FISHERMAN',
            fisherman : fisherman
        })
    }

    getFisherman(id) {
        dispatcher.handleViewAction({
            commandType : 'GET_FISHERMAN',
            id : id
        });
    }

    deleteFisherman(id) {
        dispatcher.handleViewAction({
            commandType : 'DELETE_FISHERMAN',
            id : id
        })
    }

    getFishermen() {
        dispatcher.handleViewAction({
            commandType : 'GET_FISHERMEN'
        });
    }
}
