// import { stopSubmit } from 'redux-form'
import { takeEvery, take, put, race} from 'redux-saga/effects'
import { LOCATION_CHANGE, push } from 'react-router-redux'
import { SUBMIT_SNAP, CANCEL_SNAP } from '../constants'
import { createSnap, updateSnap } from '../actions'
// import { api } from '../utils'

function* manageSnapForm({ payload : { pathname } }){
    //doesn't cancel api call - need FIXING
    if(pathname === '/snaps/new'){
        const { cancel, submit } = yield race({
            cancel : take(CANCEL_SNAP),
            submit : take(SUBMIT_SNAP)
        })
        if(cancel){
            yield put(push(cancel.path))
            return //not necessary cuz of else statement
        }
        else {
            const { formName, snap, mode, id } = submit
            if(mode === "Create New"){
                yield put(createSnap(formName, snap))
            }
            if(mode === "Edit"){
                yield put(updateSnap(formName, snap, id))
            }
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
