import { fork , all} from 'redux-saga/effects'
import watchGetAllSnaps from './snaps'
import watchCreateSnap from './createSnap'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchGetAllSnaps),
        fork(watchCreateSnap)
    ])
}