import { fork , all} from 'redux-saga/effects'
import watchGetAllSnaps from './snaps'
import watchCreateSnap from './createSnap'
import watchSnapForm from './snapForm'
import watchGetSingleSnap from './singleSnap'
import watchDeleteSnap from './deleteSnap'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchGetAllSnaps),
        fork(watchCreateSnap),
        fork(watchSnapForm),
        fork(watchGetSingleSnap),
        fork(watchDeleteSnap)
    ])
}