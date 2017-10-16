import { takeEvery, take, put, race} from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'react-router-redux'
import { SUBMIT_SNAP, CANCEL_SNAP } from '../constants'
import { saveSnap } from '../actions'


function* manageSnapForm({ payload : { pathname } }){
    //doesn't cancel api call - need FIXING
    if(pathname === '/snaps/new' || pathname.search(/^\/snaps\/edit\/\d+\/?$/) !== -1 ){
        const { cancel, submit } = yield race({
            cancel : take(CANCEL_SNAP),
            submit : take(SUBMIT_SNAP)
        })
        if(cancel){
            const { mode, id } = cancel
            yield put({type : `CANCEL_${mode}_SNAP` , id})
            return //not necessary cuz of else statement
        }
        else {
            const { formName, snap, mode, id } = submit
            yield put(saveSnap(formName, snap, mode, id))
        }
    }
}


//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchSnapForm(){
    //Will it trigger if path is typed in browser directly??
    yield takeEvery(LOCATION_CHANGE, manageSnapForm)
}
