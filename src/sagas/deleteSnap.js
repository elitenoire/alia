import { takeEvery, call, put} from 'redux-saga/effects'
import { replace } from 'react-router-redux'
import { DELETE_SNAP, DELETE_SNAP_PASS, DELETE_SNAP_FAIL } from '../constants'
import { api } from '../utils'

function* deleteSingleSnap({ id }){
    const { response, error } = yield call(api.deleteSnap, id)
    if(response){
        // const snaps = yield call(snapsParser, response.data)
        yield put({type : DELETE_SNAP_PASS, id : response})
        yield put(replace('/'))
    }
    else
        yield put({type : DELETE_SNAP_FAIL, error})
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchDeleteSnap(){
    yield takeEvery(DELETE_SNAP, deleteSingleSnap)
}
