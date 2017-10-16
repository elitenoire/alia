import { takeEvery, put, all} from 'redux-saga'
import { push } from 'react-router-redux'

export default function* routeChanger(){
    yield all([
        takeEvery(),
        takeEvery(),
        takeEvery(),
        takeEvery(),
        takeEvery()
    ])
}

function* changeRoute({ path }){
    yield put(push(path))
}