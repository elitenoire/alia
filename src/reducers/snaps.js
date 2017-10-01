import { GET_SNAPS, GET_SNAPS_PASS, GET_SNAPS_FAIL} from '../constants'

const INITIAL_STATE = { isFetching : false, snaps : {}, error : ''}

export default (state = INITIAL_STATE, { type, error, snaps }) => {
    switch(type){
        case GET_SNAPS :
            return {...state, isFetching : true}
        case GET_SNAPS_PASS :
            return {...state, isFetching : false, snaps}
        case GET_SNAPS_FAIL :
            return {...state, isFetching : false, error}
        default :
            return state
    }
}