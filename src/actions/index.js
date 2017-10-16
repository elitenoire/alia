import { GET_SNAPS, GET_SNAP_SINGLE, CREATE_SNAP, UPDATE_SNAP, BACK_HOME,
    DELETE_SNAP, CANCEL_SNAP , SUBMIT_SNAP, ADD_SNAP, SELECT_SNAP, EDIT_SNAP,
    HOME_PATH, VIEW_SNAP_PATH } from '../constants'

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

export const selectSnap = (id) => {
    return {
        type : SELECT_SNAP,
        id
    }
}

export const editSnap = (id) => {
    return {
        type : EDIT_SNAP,
        id
    }
}
//*************************** */

export const deleteSnap = (id) => {
    return {
        type : DELETE_SNAP,
        id
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

// export const updateSnap = (formName, snap , id) => {
//     return {
//         type : UPDATE_SNAP,
//         path : `${VIEW_SNAP_PATH}/${id}`,
//         method : 'put',
//         formName,
//         snap,
//         id
//     }
//}

export const cancelSnap = (formName, mode, id = '') => {
    return {
        type : CANCEL_SNAP,
        mode,
        id,
        formName,
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

