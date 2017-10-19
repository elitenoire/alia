import { GET_SNAPS, GET_SNAP_SINGLE, BACK_HOME, DELETE_SNAP,
    CANCEL_SNAP , SUBMIT_SNAP, ADD_SNAP, SELECT_SNAP, EDIT_SNAP,
    TOGGLE_DELETE_MODAL, CANCEL_DELETE_MODAL, DELETE_SNAP_MODAL } from '../constants'

//***********NEED TO DRY CODE ************* */
export const getSnaps = () => {
    return {
        type : GET_SNAPS
    }
}

export const addSnap = () => {
    return {
        type : ADD_SNAP
    }
}

export const backToHome = () => {
    return {
        type :  BACK_HOME
    }
}
//***********NEED TO DRY CODE ************* */
export const getSingleSnap = (id) => {
    return {
        type : GET_SNAP_SINGLE,
        id
    }
}

export const selectSnap = (snap, color) => {
    return {
        type : SELECT_SNAP,
        id : snap.id,
        snap,
        color
    }
}

export const editSnap = (id) => {
    return {
        type : EDIT_SNAP,
        id
    }
}

export const deleteSnap = (id) => {
    return {
        type : DELETE_SNAP,
        id
    }
}
//*************************** */


export const cancelSnap = (formName, mode, id = '') => {
    return {
        type : CANCEL_SNAP,
        mode,
        id,
        formName,
    }
}

export const saveSnap = (formName, snap, mode, id = '') => {
    return {
        type : `${mode}_SNAP`,
        method : mode === 'CREATE' ? 'post' : 'put',
        formName,
        snap,
        id
    }
}

export const submitSnap = (formName, snap, mode, id = '') => {
    return {
        type : SUBMIT_SNAP,
        formName,
        snap,
        mode,
        id
    }
}

export const showModal = toggle => {
    return {
        type : TOGGLE_DELETE_MODAL,
        toggle,
    }
}

export const cancelModal = () => {
    return {
        type : CANCEL_DELETE_MODAL
    }
}

export const openModal = () => {
    return {
        type : DELETE_SNAP_MODAL
    }
}

