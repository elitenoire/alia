import { GET_SNAPS, CREATE_SNAP } from '../constants'

export const getSnaps = () => {
    return {
        type : GET_SNAPS
    }
}

export const createSnap = (snap) => {
    return {
        type : CREATE_SNAP,
        snap
    }
}