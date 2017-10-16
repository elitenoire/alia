import { takeEvery, put, all} from 'redux-saga/effects'
import { routerActions } from 'react-router-redux'

import { HOME_PATH, CREATE_SNAP_PATH, EDIT_SNAP_PATH, VIEW_SNAP_PATH } from '../routes/routeMap'
import { SELECT_SNAP, EDIT_SNAP, ADD_SNAP, DELETE_SNAP_PASS,
        CANCEL_CREATE_SNAP, CANCEL_UPDATE_SNAP, BACK_HOME,
        CREATE_SNAP_PASS, UPDATE_SNAP_PASS } from '../constants'

export default function* routeChanger(){
    yield all(Object.keys(actionRouteMap).map( pattern => {
        return takeEvery(pattern, changeRoute, actionRouteMap[pattern])
    }))
}

function* changeRoute(path, { type, id }){
    const action = type === DELETE_SNAP_PASS ? 'replace' : 'push'
    yield put(routerActions[action](`${path}${id || ''}`))
}

const actionRouteMap = {
    [SELECT_SNAP] : VIEW_SNAP_PATH,
    [EDIT_SNAP] : EDIT_SNAP_PATH,
    [ADD_SNAP] : CREATE_SNAP_PATH,
    [BACK_HOME] : HOME_PATH,
    [DELETE_SNAP_PASS] : HOME_PATH,
    [CANCEL_CREATE_SNAP] : HOME_PATH,
    [CANCEL_UPDATE_SNAP] : VIEW_SNAP_PATH,
    [CREATE_SNAP_PASS] : HOME_PATH,
    [UPDATE_SNAP_PASS] : VIEW_SNAP_PATH
}
