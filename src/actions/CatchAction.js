import dispatcher from "../AppDispatcher";

class CatchAction {

    newCatch(item) {
        dispatcher.handleViewAction({
            commandType : 'INSERT_CATCH',
            item : item
        })
    }

    getCatch(fishermanId) {
        dispatcher.handleViewAction({
            commandType : 'GET_CATCH',
            fishermanId : fishermanId
        })
    }
}
