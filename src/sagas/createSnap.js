import { startSubmit, stopSubmit } from 'redux-form'
import { takeLatest, take, call, put, race} from 'redux-saga/effects'
import { push } from 'react-router-redux'
import { CREATE_SNAP, CREATE_SNAP_FAIL, CREATE_SNAP_PASS, CANCEL_CREATE_SNAP } from '../constants'
import { api } from '../utils'

function* snapCreator({ snap, formName }){
    yield put(startSubmit(formName))
    const errors = {}
    const { submit, cancel } = yield race({
        submit : call(api.createSnap, snap),
        cancel : take(CANCEL_CREATE_SNAP)// || LOCATION_CHANGE)
    })
    yield put(stopSubmit(formName, errors))
    if(submit){
        const { response, error } = submit
        if(response){
            yield put({type : CREATE_SNAP_PASS, snap : response.data})
            yield put(push('/'))
        }
        else{
            // errors = error
            yield put({type : CREATE_SNAP_FAIL, error})
        }
    }
    if(cancel){
        yield put(push('/'))
    }
    // const { response, error } = yield call(api.createSnap, snap)
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchCreateSnap(){
    yield takeLatest(CREATE_SNAP, snapCreator)
}
