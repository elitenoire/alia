import { takeLatest, call, put} from 'redux-saga/effects'
import { CREATE_SNAP, CREATE_SNAP_FAIL, CREATE_SNAP_PASS } from '../constants'
import { api } from '../utils'

function* snapCreator({ snap }){
    const { response, error } = yield call(api.createSnap, snap)
    if(response){
        // const res = yield call(snapsParser, response.data) //need to edit
        yield put({type : CREATE_SNAP_PASS, snap : response.data})
    }
    else
        yield put({type : CREATE_SNAP_FAIL, error})
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchCreateSnap(){
    yield takeLatest(CREATE_SNAP, snapCreator)
}
