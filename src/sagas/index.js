import { fork , all, spawn} from 'redux-saga/effects'
import watchGetAllSnaps from './snaps'
import watchSaveSnap from './saveSnap'
import watchSnapForm from './snapForm'
import watchGetSingleSnap from './singleSnap'
import watchDeleteSnap from './deleteSnap'
import routeChanger from './routeChanger'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield spawn(routeChanger)
    
    yield all([
        fork(watchGetAllSnaps),
        fork(watchSaveSnap),
        fork(watchSnapForm),
        fork(watchGetSingleSnap),
        fork(watchDeleteSnap)
    ])
}