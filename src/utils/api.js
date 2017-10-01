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

export { api }