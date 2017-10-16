import axios from 'axios'

const client = axios.create({
    baseURL: 'https://alia-server.herokuapp.com/api'
  });

const api = {}

api.getSnaps = async () => {
    try{
        const response = await client.get('/snaps') // + API_KEY)
        return { response } //return response and handle data in saga?
    }
    catch(err){
        console.log(JSON.stringify(err))
        // if(err.response){
        //     console.log(err.response.status)
        //     console.log(err.response.data)
        // }
        return {error : err.response.status}
    }
}

api.getSingleSnap = async (id) => {
    try {
        const response = await client.get('/snaps/' + id ) // + API_KEY)
        return { response }
    }
    catch(err){
        return {error : err.message}
    }
}

api.deleteSnap = async (id) => {
    try{
        await client.delete('/snaps/' + id ) // + API_KEY)
        return { response : id }
    }
    catch(err){
        return {error : err.message}
    }
}

api.saveSnap = async (snap, method, id = '') => {
    try{
        const response = await client[method]('/snaps/' + id, snap) // + API_KEY, snap)
        return { response }
    }
    catch(err){
        return {error : err.message}
    }
}

export { api }