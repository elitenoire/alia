import { takeEvery, call, put } from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { DELETE_SNAP, DELETE_SNAP_FAIL, DELETE_SNAP_CACHE } from '../constants'
import { api } from '../utils'

function* deleteSingleSnap({ id, path }){
    const { error } = yield call(api.deleteSnap, id) //delete from backend api
    if(error){
        yield put({type : DELETE_SNAP_FAIL, error})
    }
    else {
        yield put(replace(path))
        yield put({type : DELETE_SNAP_CACHE, id }) //delete from local cache
        // yield put({type : DELETE_SNAP_PASS })
    }
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchDeleteSnap(){
    yield takeEvery(DELETE_SNAP, deleteSingleSnap)
}

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