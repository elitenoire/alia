import axios from 'axios'

const API_KEY = '?key=AliaSnaps123'
const client = axios.create({
    baseURL: 'http://reduxblog.herokuapp.com/api'
  });

const api = {}

api.getSnaps = async () => {
 try{
     const response = await client.get('/posts' + API_KEY)
     return { response } //return response and handle data in saga?
 }
 catch(err){
     return {error : err.message}
 }
}

api.getSingleSnap = async (id) => {
    try {
        const response = await client.get('/posts/' + id + API_KEY)
        return { response }
    }
    catch(err){
        return {error : err.messageg}
    }
}

api.createSnap = async (snap) => {
    try{
        const response = await client.post('/posts' + API_KEY, snap)
        return { response }
    }
    catch(err){
        return {error : err.message}
    }
}

api.deleteSnap = async (id) => {
    try{
        await client.delete('/posts/' + id + API_KEY)
        return { response : id }
    }
    catch(err){
        return {error : err.message}
    }
}

export { api }