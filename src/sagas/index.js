import { fork , all} from 'redux-saga/effects'
import watchSnapsRoute from './snaps'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchSnapsRoute)
    ])
}