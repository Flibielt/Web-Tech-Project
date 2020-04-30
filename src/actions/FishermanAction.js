import dispatcher from "../AppDispatcher";

class FishermanAction {

    newFisherman(item) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_FISHERMAN',
            item : item
        });
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
