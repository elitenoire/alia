import { GET_SNAPS_PASS, GET_SNAPS_FAIL, DELETE_SNAP_CACHE, DELETE_SNAP_FAIL,
    GET_SNAP_SINGLE_PASS, GET_SNAP_SINGLE_FAIL, UPDATE_SNAP_PASS,
    TOGGLE_DELETE_MODAL } from '../constants'

const INITIAL_STATE = { isFetching : true, snaps : {}, error : '', deleteModal : false }

export default (state = INITIAL_STATE, { type, error, snaps, snap, id, toggle }) => {
    switch(type){
        case GET_SNAPS_PASS :
            return {...state, isFetching : false, snaps}
        case GET_SNAP_SINGLE_PASS :
        case UPDATE_SNAP_PASS :
            return { ...state, isFetching : false, snaps : {...state.snaps, [snap.id] : snap} }
        case DELETE_SNAP_CACHE : {
            const copy = {...state.snaps}
            delete copy[id]
            return { ...state, isFetching : false, snaps : copy }
        }
        //add fail state for create, update
        case GET_SNAPS_FAIL :
        case GET_SNAP_SINGLE_FAIL :
        case DELETE_SNAP_FAIL :
            return {...state, isFetching : false, error}
        case TOGGLE_DELETE_MODAL :
            return {...state, deleteModal : toggle}
        default :
            return state
    }
}