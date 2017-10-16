import { takeEvery, put, all} from 'redux-saga'
import { push } from 'react-router-redux'
import { SELECT_SNAP, EDIT_SNAP, ADD_SNAP, DELETE_SNAP_CACHE,
        CANCEL_CREATE_SNAP, CANCEL_UPDATE_SNAP,
        CREATE_SNAP_PASS, UPDATE_SNAP_PASS } from '../constants'

export default function* routeChanger(){
    yield all([
        takeEvery(),
        takeEvery(),
        takeEvery(),
        takeEvery(),
        takeEvery()
    ])
}

function* changeRoute({ path, id }){
    //If delete ? replace : push
    yield put(push(`${path}/${id || ''}`)
}