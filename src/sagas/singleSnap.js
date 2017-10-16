import { takeLatest, call, put} from 'redux-saga/effects'
import { GET_SNAP_SINGLE, GET_SNAP_SINGLE_PASS, GET_SNAP_SINGLE_FAIL } from '../constants'
import { api } from '../utils'

function* loadSingleSnap({ id }){
    const { response, error } = yield call(api.getSingleSnap, id)
    if(response){
        // const snaps = yield call(snapsParser, response.data)
        yield put({type : GET_SNAP_SINGLE_PASS, snap : response.data})
    }
    else{
        // console.error( error)
        yield put({type : GET_SNAP_SINGLE_FAIL, error})
    }
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchGetSingleSnap(){
    yield takeLatest(GET_SNAP_SINGLE, loadSingleSnap)
}
