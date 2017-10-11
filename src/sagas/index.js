import { fork , all} from 'redux-saga/effects'
import watchGetAllSnaps from './snaps'
import watchCreateSnap from './createSnap'
import watchSnapForm from './snapForm'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchGetAllSnaps),
        fork(watchCreateSnap),
        fork(watchSnapForm)
    ])
}