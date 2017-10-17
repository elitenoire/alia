import { takeEvery, call, put, fork, race, take } from 'redux-saga/effects'
import { DELETE_SNAP, DELETE_SNAP_FAIL, TOGGLE_DELETE_MODAL, CANCEL_DELETE_MODAL,
    DELETE_SNAP_CACHE, DELETE_SNAP_PASS, DELETE_SNAP_MODAL } from '../constants'
import { showModal } from '../actions'
import { api } from '../utils'

function* deleteSingleSnap(id){
    const { error } = yield call(api.deleteSnap, id) //delete from backend api
    if(error){
        yield put({type : DELETE_SNAP_FAIL, error})
    }
    else {
        yield put({type : DELETE_SNAP_PASS })
        yield put({type : DELETE_SNAP_CACHE, id }) //delete from local cache
    }
}

function* deleteSnapCheck(){
    yield put(showModal(true))
    //wait for UI to cancel or approve delete from modal
    const { deleteOk } = yield race(
        {
            deleteOk: take(DELETE_SNAP),
            cancel: take(CANCEL_DELETE_MODAL),
        }
    )
    //Make delete request to api
    if(deleteOk){
        yield fork(deleteSingleSnap, deleteOk.id) //might change to call/spawn ?
    }
    //close modal -> causes it to rerender, need to prevent that as it will make get api request
    yield put(showModal(false))
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchDeleteSnap(){
    yield takeEvery(DELETE_SNAP_MODAL, deleteSnapCheck)
}

// Consider this code to handle multiple delete request from a list, maybe
//
// export default function* watchDeleteSnap() {
//     // 1- Create a channel for request actions
//     const requestChan = yield actionChannel(DELETE_SNAP)
//     while (true) {
//       // 2- take from the channel
//       const { id } = yield take(requestChan)
//       // 3- Note that we're using a blocking call
//       yield call(deleteSingleSnap, id)
//     }
//   }