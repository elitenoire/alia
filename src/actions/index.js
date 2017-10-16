import { GET_SNAPS, GET_SNAP_SINGLE, CREATE_SNAP, UPDATE_SNAP,
    DELETE_SNAP, CANCEL_SNAP , SUBMIT_SNAP,
    HOME_PATH, VIEW_SNAP_PATH } from '../constants'

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
        path : HOME_PATH,
        id
    }
}

export const createSnap = (formName, snap) => {
    return {
        type : CREATE_SNAP,
        path : HOME_PATH,
        method : 'post',
        formName,
        snap
    }
}

export const updateSnap = (formName, snap , id) => {
    return {
        type : UPDATE_SNAP,
        path : `${VIEW_SNAP_PATH}/${id}`,
        method : 'put',
        formName,
        snap,
        id
    }

export const cancelSnap = (formName, mode) => {
    return {
        type : CANCEL_SNAP,
        path : mode === 'Create New' ? HOME_PATH : VIEW_SNAP_PATH,
        formName,
    }
}

export const submitSnap = (formName, snap, mode, id) => {
    return {
        type : SUBMIT_SNAP,
        formName,
        snap,
        mode,
        id
    }
}

}