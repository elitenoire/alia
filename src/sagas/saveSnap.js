import { startSubmit, stopSubmit } from 'redux-form'
import { takeLatest, take, call, put, race} from 'redux-saga/effects'
import { CREATE_SNAP, UPDATE_SNAP, CANCEL_SNAP } from '../constants'
import { api } from '../utils'

function* snapSaver({ type, snap, formName, id, method }){
    yield put(startSubmit(formName))

    const errors = {}

    const { submit, cancel } = yield race({
        submit : call(api.saveSnap, snap, method, id),
        cancel : take(CANCEL_SNAP)
    })

    yield put(stopSubmit(formName, errors))

    if(submit){
        const { response, error } = submit
        if(response){
            yield put({type : `${type}_PASS`, snap : response.data, id})
        }
        else{
            yield put({type : `${type}_FAIL`, error})
        }
    }
    if(cancel){
        yield put({type : `CANCEL_${cancel.mode}_SNAP`, id})
    }
}



//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchSaveSnap(){
    yield takeLatest([CREATE_SNAP, UPDATE_SNAP], snapSaver)
}
