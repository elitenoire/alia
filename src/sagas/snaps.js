import { takeLatest, call, put} from 'redux-saga/effects'
import { GET_SNAPS, GET_SNAPS_PASS, GET_SNAPS_FAIL } from '../constants'
import { api, snapsParser } from '../utils'

function* loadSnaps(){
    const { response, error } = yield call(api.getSnaps)
    if(response){
        const snaps = yield call(snapsParser, response.data)
        yield put({type : GET_SNAPS_PASS, snaps})
    }
    else
        yield put({type : GET_SNAPS_FAIL, error})
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchSnapsRoute(){
    yield takeLatest(GET_SNAPS, loadSnaps)
}
