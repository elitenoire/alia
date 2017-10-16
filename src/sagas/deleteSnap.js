import { takeEvery, call, put } from 'redux-saga/effects'
import { DELETE_SNAP, DELETE_SNAP_FAIL,
    DELETE_SNAP_CACHE, DELETE_SNAP_PASS } from '../constants'
import { api } from '../utils'

function* deleteSingleSnap({ id }){
    const { error } = yield call(api.deleteSnap, id) //delete from backend api
    if(error){
        yield put({type : DELETE_SNAP_FAIL, error})
    }
    else {
        yield put({type : DELETE_SNAP_PASS })
        yield put({type : DELETE_SNAP_CACHE, id }) //delete from local cache
    }
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchDeleteSnap(){
    yield takeEvery(DELETE_SNAP, deleteSingleSnap)
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