import { GET_SNAPS, CREATE_SNAP, CANCEL_CREATE_SNAP , SUBMIT_SNAP} from '../constants'

export const getSnaps = () => {
    return {
        type : GET_SNAPS
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
