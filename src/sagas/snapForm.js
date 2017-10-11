// import { stopSubmit } from 'redux-form'
import { takeEvery, take, call, put, race} from 'redux-saga/effects'
import { LOCATION_CHANGE, push } from 'react-router-redux'
import { SUBMIT_SNAP, CANCEL_CREATE_SNAP } from '../constants'
import { createSnap } from '../actions'
// import { api } from '../utils'

function* manageSnapForm({ payload : { pathname } }){
    //doesn't cancel api call - need FIXING
    if(pathname === '/snaps/new'){
        const { cancel, submit } = yield race({
            cancel : take(CANCEL_CREATE_SNAP),
            submit : take(SUBMIT_SNAP)
        })
        if(cancel){
            yield put(push('/'))
            return //not necessary cuz of else statement
        }
        else {
            const { snap, formName } = submit
            yield put(createSnap(snap, formName))
        }
    }
    // yield race({
    //     cancel : take(CANCEL_CREATE_SNAP),
    //     snap : take(CREATE_SNAP_PASS || CREATE_SNAP_FAIL)
    // })
    // const { response, error } = yield call(api.createSnap, snap)
    // if(response){
    //     // const res = yield call(snapsParser, response.data) //need to edit
    //     yield put({type : CREATE_SNAP_PASS, snap : response.data})
    // }
    // else
    //     yield put({type : CREATE_SNAP_FAIL, error})
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchSnapForm(){
    yield takeEvery(LOCATION_CHANGE, manageSnapForm)
}
