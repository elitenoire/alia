import { GET_SNAPS, GET_SNAPS_PASS, GET_SNAPS_FAIL,
    GET_SNAP_SINGLE, GET_SNAP_SINGLE_PASS, GET_SNAP_SINGLE_FAIL} from '../constants'

const INITIAL_STATE = { isFetching : true, snaps : {}, error : ''}

export default (state = INITIAL_STATE, { type, error, snaps, snap }) => {
    switch(type){
        // case GET_SNAPS :
        // case GET_SNAP_SINGLE :
        //     return {...state, isFetching : true}
        case GET_SNAPS_PASS :
            return {...state, isFetching : false, snaps}
        case GET_SNAP_SINGLE_PASS :
            return { ...state, isFetching : false, snaps : {...state.snaps, [snap.id] : snap} }
        case GET_SNAPS_FAIL :
        case GET_SNAP_SINGLE_FAIL :
            return {...state, isFetching : false, error}
        default :
            return state
    }
}