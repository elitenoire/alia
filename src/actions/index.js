import { GET_SNAPS, GET_SNAP_SINGLE, CREATE_SNAP, DELETE_SNAP, CANCEL_CREATE_SNAP , SUBMIT_SNAP} from '../constants'

export const getSnaps = () => {
    return {
        type : GET_SNAPS
    }
}

export const getSingleSnap = (id) => {
    return {
        type : GET_SNAP_SINGLE,
        id
    }
}

export const deleteSnap = (id) => {
    return {
        type : DELETE_SNAP,
        id
    }
}

export const createSnap = (snap, formName) => {
    return {
        type : CREATE_SNAP,
        snap,
        formName,
    }
}

export const cancelCreateSnap = (formName, path) => {
    return {
        type : CANCEL_CREATE_SNAP,
        path,
        formName,
    }
}

export const submitSnap = (snap, formName) => {
    return {
        type : SUBMIT_SNAP,
        snap,
        formName,
    }
}
