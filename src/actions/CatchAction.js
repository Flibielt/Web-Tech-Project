import dispatcher from "../AppDispatcher";

class CatchAction {

    newCatch(newCatch) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_CATCH',
            newCatch : newCatch
        })
    }

    getCatches(fishermanId) {
        dispatcher.handleViewAction({
            commandType : 'GET_CATCHES',
            fishermanId : fishermanId
        })
    }
}

export default new CatchAction();
